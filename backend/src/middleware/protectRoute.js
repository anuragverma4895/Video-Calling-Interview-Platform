import { clerkClient, requireAuth } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

async function provisionUserFromClerk(clerkId) {
  const clerkUser = await clerkClient.users.getUser(clerkId);
  const primaryEmail =
    clerkUser.primaryEmailAddress?.emailAddress ||
    clerkUser.emailAddresses?.[0]?.emailAddress ||
    `${clerkId}@clerk.local`;
  const name =
    clerkUser.fullName ||
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ").trim() ||
    clerkUser.username ||
    primaryEmail.split("@")[0];
  const profileImage = clerkUser.imageUrl || "";

  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      clerkId,
      email: primaryEmail,
      name,
      profileImage,
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    }
  );

  await upsertStreamUser({
    id: user.clerkId,
    name: user.name,
    image: user.profileImage,
  });

  return user;
}

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized - invalid token" });
      }

      let user = await User.findOne({ clerkId });

      // In local development the Clerk webhook/Inngest sync may not have run yet.
      if (!user) {
        user = await provisionUserFromClerk(clerkId);
      }

      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
