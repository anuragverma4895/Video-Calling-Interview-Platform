import { ENV } from "./env.js";

const DEFAULT_PISTON_API_URL = "https://emkc.org/api/v2/piston/execute";
const EXECUTION_TIMEOUT_MS = 20000;

export async function executeCode({ language, version, files }) {
  const pistonApiUrl = normalizeExecutionUrl(ENV.PISTON_API_URL || DEFAULT_PISTON_API_URL);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EXECUTION_TIMEOUT_MS);

  try {
    const response = await fetch(pistonApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, version, files }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Piston API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Code execution timed out. Please try again.");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeExecutionUrl(url) {
  const trimmedUrl = url.trim().replace(/\/+$/, "");
  return trimmedUrl.endsWith("/execute") ? trimmedUrl : `${trimmedUrl}/execute`;
}
