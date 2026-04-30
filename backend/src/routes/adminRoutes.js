import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
import {
  adminEndSession,
  deleteSessionAsAdmin,
  deleteUserAsAdmin,
  getAdminAccess,
  getAdminOverview,
} from "../controllers/adminController.js";

const router = express.Router();

router.use(protectRoute, requireAdmin);

router.get("/access", getAdminAccess);
router.get("/overview", getAdminOverview);
router.post("/sessions/:id/end", adminEndSession);
router.delete("/sessions/:id", deleteSessionAsAdmin);
router.delete("/users/:id", deleteUserAsAdmin);

export default router;
