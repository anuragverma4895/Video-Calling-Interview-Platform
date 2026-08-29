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
      headers: buildExecutionHeaders(),
      body: JSON.stringify({ language, version, files }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(getExecutionServiceError(response));
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

function buildExecutionHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };

  if (ENV.PISTON_API_TOKEN) {
    headers.Authorization = `Bearer ${ENV.PISTON_API_TOKEN}`;
  }

  return headers;
}

function normalizeExecutionUrl(url) {
  const trimmedUrl = url.trim().replace(/\/+$/, "");
  return trimmedUrl.endsWith("/execute") ? trimmedUrl : `${trimmedUrl}/execute`;
}
function getExecutionServiceError(response) {
  if (response.status === 401 || response.status === 403) {
    return "Code execution authorization failed. Please contact the administrator.";
  }

  return `Code execution service returned HTTP ${response.status}. Please try again later.`;
}

