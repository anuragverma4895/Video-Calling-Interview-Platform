import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import executeRoute from "./routes/executeRoute.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/execute", executeRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  let databaseConnected = false;

  try {
    await connectDB();
    databaseConnected = true;
  } catch (error) {
    const isProduction = ENV.NODE_ENV === "production";
    console.error("Database connection failed:", error.message || error);

    if (isProduction) {
      process.exit(1);
    }

    console.warn(
      "Starting backend without MongoDB. Session and chat features may fail, but code execution remains available."
    );
  }

  const port = ENV.PORT || 3000;
  app.listen(port, () =>
    console.log(
      `Server is running on port: ${port}${databaseConnected ? "" : " (without MongoDB)"}`
    )
  );
};

startServer();
