import express from "express";
import { executeCode } from "../lib/codeRunner.js";

const router = express.Router();
const MAX_CODE_SIZE_BYTES = 200_000;

router.post("/", async (req, res) => {
  try {
    const validationError = validateExecutionRequest(req.body);

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const { language, version, files } = req.body;
    const result = await executeCode({ language, version, files });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error executing code:", error.message || error);
    res.status(getErrorStatus(error)).json({
      message: error.message || "Code execution service is unavailable. Please try again later.",
    });
  }
});

function validateExecutionRequest(body) {
  if (!body || typeof body !== "object") {
    return "Invalid execution request.";
  }

  if (typeof body.language !== "string" || !body.language.trim()) {
    return "Language is required.";
  }

  if (typeof body.version !== "string" || !body.version.trim()) {
    return "Language version is required.";
  }

  if (!Array.isArray(body.files) || body.files.length === 0) {
    return "Code file is required.";
  }

  for (const file of body.files) {
    if (!file || typeof file !== "object" || typeof file.content !== "string") {
      return "Invalid code file.";
    }

    if (!file.content.trim()) {
      return "Code is required.";
    }

    if (Buffer.byteLength(file.content, "utf8") > MAX_CODE_SIZE_BYTES) {
      return "Code is too large.";
    }
  }

  return null;
}

function getErrorStatus(error) {
  if (Number.isInteger(error.statusCode)) {
    return error.statusCode;
  }

  return 502;
}

export default router;

