import Session from "../models/Session.js";
import User from "../models/User.js";
import { completeSession, cleanupSessionResources } from "./sessionController.js";
import { deleteStreamUser } from "../lib/stream.js";

async function getOverviewPayload() {
  const [users, sessions] = await Promise.all([
    User.find().sort({ createdAt: -1 }),
    Session.find()
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .sort({ createdAt: -1 }),
  ]);

  const stats = {
    totalUsers: users.length,
    totalSessions: sessions.length,
    activeSessions: sessions.filter((session) => session.status === "active").length,
    completedSessions: sessions.filter((session) => session.status === "completed").length,
  };

  return { stats, users, sessions };
}

export async function getAdminAccess(req, res) {
  res.status(200).json({
    isAdmin: true,
    admin: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      clerkId: req.user.clerkId,
    },
  });
}

export async function getAdminOverview(req, res) {
  try {
    const overview = await getOverviewPayload();
    res.status(200).json(overview);
  } catch (error) {
    console.log("Error in getAdminOverview controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function adminEndSession(req, res) {
  try {
    const session = await Session.findById(req.params.id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status === "active") {
      await completeSession(session);
    }

    res.status(200).json({ session, message: "Session closed by admin" });
  } catch (error) {
    console.log("Error in adminEndSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteSessionAsAdmin(req, res) {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status === "active") {
      await cleanupSessionResources(session);
    }

    await Session.findByIdAndDelete(session._id);

    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    console.log("Error in deleteSessionAsAdmin controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteUserAsAdmin(req, res) {
  try {
    const { id } = req.params;

    if (req.user._id.toString() === id) {
      return res.status(400).json({ message: "You cannot delete your own admin account" });
    }

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const hostSessions = await Session.find({ host: user._id });
    const participantSessions = await Session.find({ participant: user._id, host: { $ne: user._id } });

    for (const session of hostSessions) {
      if (session.status === "active") {
        await cleanupSessionResources(session);
      }
      await Session.findByIdAndDelete(session._id);
    }

    for (const session of participantSessions) {
      session.participant = null;
      await session.save();
    }

    await User.findByIdAndDelete(user._id);
    await deleteStreamUser(user.clerkId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleteUserAsAdmin controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
