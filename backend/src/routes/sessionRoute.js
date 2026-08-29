import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  grantEditAccess,
  joinSession,
  joinSessionByCode,
  leaveSession,
  requestEditAccess,
  revokeEditAccess,
  updateSessionCode,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);
router.post("/join-by-code", protectRoute, joinSessionByCode);

router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/leave", protectRoute, leaveSession);
router.post("/:id/end", protectRoute, endSession);
router.post("/:id/edit-access/request", protectRoute, requestEditAccess);
router.post("/:id/edit-access/grant", protectRoute, grantEditAccess);
router.post("/:id/edit-access/revoke", protectRoute, revokeEditAccess);
router.post("/:id/code", protectRoute, updateSessionCode);

export default router;
