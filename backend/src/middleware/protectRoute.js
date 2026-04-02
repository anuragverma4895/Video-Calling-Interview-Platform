import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      // find user in db by clerk ID
      let user = await User.findOne({ clerkId });

      // If user not found (e.g. in local dev without webhooks), create them on the fly
      if (!user) {
        console.log("User not found in DB, fetching from Clerk...", clerkId);
        try {
          const clerkUser = await clerkClient.users.getUser(clerkId);
          user = await User.create({
            clerkId: clerkId,
            name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || clerkUser.username || "User",
            email: clerkUser.emailAddresses[0]?.emailAddress || "",
            profileImage: clerkUser.imageUrl || "",
          });
          console.log("User synced from Clerk successfully");
        } catch (clerkError) {
          console.error("Error fetching user from Clerk:", clerkError);
          return res.status(404).json({ message: "User not found and failed to sync from Clerk" });
        }
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
