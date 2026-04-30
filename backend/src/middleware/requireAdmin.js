import { ENV } from "../lib/env.js";

const adminEmails = (ENV.ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

const adminClerkIds = (ENV.ADMIN_CLERK_IDS || "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);

export function isAdminUser(user) {
  if (!user) return false;

  const email = user.email?.toLowerCase();

  return adminClerkIds.includes(user.clerkId) || (email ? adminEmails.includes(email) : false);
}

export function requireAdmin(req, res, next) {
  if (!isAdminUser(req.user)) {
    return res.status(403).json({ message: "Admin access required" });
  }

  return next();
}
