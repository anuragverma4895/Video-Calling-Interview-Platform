import express from "express";
import { executeCode } from "../lib/codeRunner.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { language, version, files } = req.body;

    if (!language || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ message: "Language and files are required" });
    }

    const result = await executeCode({ language, version, files });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error executing code:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
