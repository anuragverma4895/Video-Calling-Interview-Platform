import { ENV } from "./env.js";

const DEFAULT_EXECUTION_TIMEOUT_MS = 20000;

export async function executeCode({ language, version, files }) {
  const pistonApiUrl = getPistonApiUrl();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getExecutionTimeoutMs());

  try {
    const response = await fetch(pistonApiUrl, {
      method: "POST",
      headers: buildExecutionHeaders(),
      body: JSON.stringify({ language, version, files }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw await getExecutionServiceError(response);
    }

    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw createExecutionError("Code execution timed out. Please try again.", 504);
    }

    if (isNetworkError(error)) {
      throw createExecutionError("Code execution service is unavailable. Please try again later.", 502);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function getPistonApiUrl() {
  if (!ENV.PISTON_API_URL?.trim()) {
    throw createExecutionError("PISTON_API_URL is not configured on the server.", 500);
  }

  return normalizeExecutionUrl(ENV.PISTON_API_URL);
}

function buildExecutionHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };

  if (ENV.PISTON_API_TOKEN?.trim()) {
    headers.Authorization = `Bearer ${ENV.PISTON_API_TOKEN.trim()}`;
  }

  return headers;
}

function getExecutionTimeoutMs() {
  const configuredTimeout = Number(ENV.PISTON_API_TIMEOUT_MS);

  if (Number.isFinite(configuredTimeout) && configuredTimeout > 0) {
    return configuredTimeout;
  }

  return DEFAULT_EXECUTION_TIMEOUT_MS;
}

function normalizeExecutionUrl(url) {
  const trimmedUrl = url.trim().replace(/\/+$/, "");

  if (trimmedUrl.endsWith("/execute")) {
    return trimmedUrl;
  }

  if (trimmedUrl.endsWith("/api/v2") || trimmedUrl.endsWith("/api/v2/piston")) {
    return `${trimmedUrl}/execute`;
  }

  return `${trimmedUrl}/api/v2/execute`;
}

async function getExecutionServiceError(response) {
  const responseMessage = await readResponseMessage(response);

  if (response.status === 401 || response.status === 403) {
    if (!ENV.PISTON_API_TOKEN?.trim()) {
      return createExecutionError(
        "Piston authorization failed. Set PISTON_API_TOKEN or use a self-hosted Piston API URL.",
        502
      );
    }

    return createExecutionError("Piston authorization failed. Check that PISTON_API_TOKEN is valid.", 502);
  }

  if (response.status === 400) {
    return createExecutionError(responseMessage || "Invalid code execution request.", 400);
  }

  if (response.status >= 500) {
    return createExecutionError("Code execution service is unavailable. Please try again later.", 502);
  }

  return createExecutionError(
    responseMessage || `Code execution service returned HTTP ${response.status}.`,
    502
  );
}

async function readResponseMessage(response) {
  try {
    const data = await response.clone().json();
    return data?.message || data?.error || "";
  } catch {
    try {
      return await response.text();
    } catch {
      return "";
    }
  }
}

function createExecutionError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function isNetworkError(error) {
  return error instanceof TypeError || /fetch failed|network|ECONN|ENOTFOUND|ETIMEDOUT/i.test(error.message || "");
}
