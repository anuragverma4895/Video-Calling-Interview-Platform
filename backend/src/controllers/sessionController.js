import crypto from "crypto";
import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

const INVITE_CODE_LENGTH = 6;
const INVITE_CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function getIdString(value) {
  if (!value) return "";
  if (value._id) return value._id.toString();
  return value.toString();
}

function generateInviteCode() {
  let code = "";

  for (let index = 0; index < INVITE_CODE_LENGTH; index += 1) {
    code += INVITE_CODE_CHARS[crypto.randomInt(0, INVITE_CODE_CHARS.length)];
  }

  return code;
}

async function createUniqueInviteCode() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const inviteCode = generateInviteCode();
    const existingSession = await Session.exists({ status: "active", inviteCode });

    if (!existingSession) {
      return inviteCode;
    }
  }

  throw new Error("Unable to generate a unique invite code");
}

function normalizeInviteCode(inviteCode = "") {
  return inviteCode.trim().toUpperCase();
}

export async function ensureInviteCode(session) {
  if (!session || session.status !== "active" || session.inviteCode) {
    return session;
  }

  session.inviteCode = await createUniqueInviteCode();
  await session.save();
  return session;
}

function serializeSessionForUser(session, user, options = {}) {
  const sessionObject = session.toObject ? session.toObject() : { ...session };
  const currentUserId = user?._id?.toString();
  const isHost = getIdString(sessionObject.host) === currentUserId;
  const isParticipant = getIdString(sessionObject.participant) === currentUserId;
  const canViewPrivateSessionData = options.forcePrivate || isHost || isParticipant;

  if (!canViewPrivateSessionData) {
    delete sessionObject.callId;
    delete sessionObject.inviteCode;
    delete sessionObject.currentCode;
    delete sessionObject.currentLanguage;
    delete sessionObject.codeUpdatedBy;
    delete sessionObject.participantCanEdit;
    delete sessionObject.editAccessRequested;
  }

  return sessionObject;
}

async function populateSession(sessionId) {
  return Session.findById(sessionId)
    .populate("host", "name email profileImage clerkId")
    .populate("participant", "name email profileImage clerkId")
    .populate("codeUpdatedBy", "name email profileImage clerkId");
}

function isSessionHost(session, userId) {
  return getIdString(session?.host) === userId.toString();
}

function isSessionParticipant(session, userId) {
  return getIdString(session?.participant) === userId.toString();
}

function canUserEditSession(session, userId) {
  return isSessionHost(session, userId) || (isSessionParticipant(session, userId) && session.participantCanEdit);
}

export async function cleanupSessionResources(session) {
  if (!session?.callId || !chatClient || !streamClient) {
    return;
  }

  try {
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });
  } catch (error) {
    console.log("Failed to delete stream call:", error.message);
  }

  try {
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();
  } catch (error) {
    console.log("Failed to delete chat channel:", error.message);
  }
}

export async function completeSession(session) {
  await cleanupSessionResources(session);
  session.status = "completed";
  session.participant = null;
  session.participantCanEdit = false;
  session.editAccessRequested = false;
  await session.save();
  return session;
}

export async function createSession(req, res) {
  let session = null;

  try {
    if (!chatClient || !streamClient) {
      return res.status(503).json({ message: "Video session services are not configured on this server." });
    }

    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res.status(400).json({ message: "Problem and difficulty are required" });
    }

    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const inviteCode = await createUniqueInviteCode();

    session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
      inviteCode,
      participantCanEdit: false,
      editAccessRequested: false,
      currentLanguage: "javascript",
      currentCode: "",
    });

    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    const populatedSession = await populateSession(session._id);
    res.status(201).json({ session: serializeSessionForUser(populatedSession, req.user) });
  } catch (error) {
    console.log("Error in createSession controller:", error.message);

    if (session) {
      await cleanupSessionResources(session);
      await Session.findByIdAndDelete(session._id).catch(() => {});
    }

    res.status(500).json({ message: "Failed to create session. Please try again." });
  }
}

export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    await Promise.all(sessions.map((session) => ensureInviteCode(session)));

    res.status(200).json({
      sessions: sessions.map((session) => serializeSessionForUser(session, req.user)),
    });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await populateSession(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    await ensureInviteCode(session);

    res.status(200).json({ session: serializeSessionForUser(session, req.user) });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function joinSessionDocument(session, req) {
  if (!chatClient) {
    return { status: 503, body: { message: "Chat service is not configured on this server." } };
  }

  const userId = req.user._id;
  const clerkId = req.user.clerkId;

  if (!session) {
    return { status: 404, body: { message: "Session not found" } };
  }

  await ensureInviteCode(session);

  if (session.status !== "active") {
    return { status: 400, body: { message: "Cannot join a completed session" } };
  }

  if (session.host.toString() === userId.toString()) {
    const populatedSession = await populateSession(session._id);
    return {
      status: 200,
      body: {
        session: serializeSessionForUser(populatedSession, req.user),
        message: "You are already the host of this session",
      },
    };
  }

  if (session.participant?.toString() === userId.toString()) {
    const populatedSession = await populateSession(session._id);
    return {
      status: 200,
      body: {
        session: serializeSessionForUser(populatedSession, req.user),
        message: "You are already in this session",
      },
    };
  }

  const requestedInviteCode = normalizeInviteCode(req.body?.inviteCode);

  if (!requestedInviteCode) {
    return { status: 400, body: { message: "Enter the invite code to join this session" } };
  }

  if (requestedInviteCode !== session.inviteCode) {
    return { status: 403, body: { message: "Invalid invite code" } };
  }

  const updatedSession = await Session.findOneAndUpdate(
    { _id: session._id, status: "active", participant: null },
    { $set: { participant: userId, participantCanEdit: false, editAccessRequested: false } },
    { new: true }
  );

  if (!updatedSession) {
    return { status: 409, body: { message: "Session is full" } };
  }

  try {
    const channel = chatClient.channel("messaging", updatedSession.callId);
    await channel.addMembers([clerkId]);
  } catch (error) {
    await Session.updateOne({ _id: updatedSession._id, participant: userId }, { $set: { participant: null } });
    console.log("Error adding participant to chat channel:", error.message);
    return { status: 500, body: { message: "Failed to join session chat. Please try again." } };
  }

  const populatedSession = await populateSession(updatedSession._id);
  return { status: 200, body: { session: serializeSessionForUser(populatedSession, req.user) } };
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const session = await Session.findById(id);
    const result = await joinSessionDocument(session, req);

    res.status(result.status).json(result.body);
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSessionByCode(req, res) {
  try {
    const inviteCode = normalizeInviteCode(req.body?.inviteCode);

    if (!inviteCode) {
      return res.status(400).json({ message: "Enter an invite code" });
    }

    const session = await Session.findOne({ status: "active", inviteCode });
    const result = await joinSessionDocument(session, req);

    res.status(result.status).json(result.body);
  } catch (error) {
    console.log("Error in joinSessionByCode controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function requestEditAccess(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });
    if (session.status !== "active") return res.status(400).json({ message: "Cannot request access for a completed session" });
    if (!isSessionParticipant(session, userId)) {
      return res.status(403).json({ message: "Only the participant can request edit access" });
    }

    session.editAccessRequested = true;
    await session.save();

    const populatedSession = await populateSession(session._id);
    res.status(200).json({ session: serializeSessionForUser(populatedSession, req.user), message: "Edit access requested" });
  } catch (error) {
    console.log("Error in requestEditAccess controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function grantEditAccess(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });
    if (session.status !== "active") return res.status(400).json({ message: "Cannot grant access for a completed session" });
    if (!isSessionHost(session, userId)) {
      return res.status(403).json({ message: "Only the host can grant edit access" });
    }
    if (!session.participant) {
      return res.status(400).json({ message: "No participant is in this session" });
    }

    session.participantCanEdit = true;
    session.editAccessRequested = false;
    await session.save();

    const populatedSession = await populateSession(session._id);
    res.status(200).json({ session: serializeSessionForUser(populatedSession, req.user), message: "Edit access granted" });
  } catch (error) {
    console.log("Error in grantEditAccess controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function revokeEditAccess(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });
    if (!isSessionHost(session, userId)) {
      return res.status(403).json({ message: "Only the host can revoke edit access" });
    }

    session.participantCanEdit = false;
    session.editAccessRequested = false;
    await session.save();

    const populatedSession = await populateSession(session._id);
    res.status(200).json({ session: serializeSessionForUser(populatedSession, req.user), message: "Edit access revoked" });
  } catch (error) {
    console.log("Error in revokeEditAccess controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateSessionCode(req, res) {
  try {
    const { id } = req.params;
    const { code, language } = req.body;
    const userId = req.user._id;
    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });
    if (session.status !== "active") return res.status(400).json({ message: "Cannot update code for a completed session" });
    if (!canUserEditSession(session, userId)) {
      return res.status(403).json({ message: "Edit access is required" });
    }
    if (typeof code !== "string" || typeof language !== "string") {
      return res.status(400).json({ message: "Code and language are required" });
    }

    session.currentCode = code;
    session.currentLanguage = language;
    session.codeUpdatedBy = userId;
    await session.save();

    const populatedSession = await populateSession(session._id);
    res.status(200).json({ session: serializeSessionForUser(populatedSession, req.user), message: "Code updated" });
  } catch (error) {
    console.log("Error in updateSessionCode controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function endSession(req, res) {
  try {
    if (!chatClient || !streamClient) {
      return res.status(503).json({ message: "Video session services are not configured on this server." });
    }

    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    await completeSession(session);

    res.status(200).json({ session: serializeSessionForUser(session, req.user), message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function leaveSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status === "completed") {
      return res.status(200).json({ session: serializeSessionForUser(session, req.user), message: "Session already completed" });
    }

    if (session.host?._id.toString() === userId) {
      await completeSession(session);
      return res.status(200).json({
        session: serializeSessionForUser(session, req.user),
        message: "Host left the session, so the session was closed",
        closed: true,
      });
    }

    if (session.participant?._id.toString() === userId) {
      session.participant = null;
      session.participantCanEdit = false;
      session.editAccessRequested = false;
      await session.save();

      const refreshedSession = await populateSession(id);

      return res.status(200).json({
        session: serializeSessionForUser(refreshedSession, req.user),
        message: "You left the session",
        closed: false,
      });
    }

    return res.status(403).json({ message: "You are not part of this session" });
  } catch (error) {
    console.log("Error in leaveSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


