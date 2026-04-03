import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { fileURLToPath } from "url";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import executeRoutes from "./routes/executeRoute.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/execute", executeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// Serve frontend build when present (Render or any prod build)
const distPath = path.join(__dirname, "../../frontend/dist");
const indexFile = path.join(distPath, "index.html");

console.log("==== PATH DEBUGGING ====");
console.log("__dirname:", __dirname);
console.log("distPath:", distPath);
console.log("indexFile path:", indexFile);
console.log("indexFile exists:", fs.existsSync(indexFile));
console.log("========================");

if (fs.existsSync(indexFile)) {
  app.use(express.static(distPath));
  app.get(/.*/, (_req, res) => res.sendFile(indexFile));
} else {
  app.get(/.*/, (_req, res) => {
    res.status(404).json({
      message: "Frontend dist not found. The React app is not correctly built or located.",
      distPath,
      indexFile,
      cwd: process.cwd()
    });
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();
