import { ENV } from "./env.js";

const DEFAULT_EXECUTION_TIMEOUT_MS = 20000;
const DEFAULT_POLL_INTERVAL_MS = 1000;
const DEFAULT_MAX_POLL_ATTEMPTS = 20;

const JUDGE0_LANGUAGE_IDS = {
  c: 50,
  "c++": 54,
  cpp: 54,
  java: 62,
  javascript: 63,
  js: 63,
  python: 71,
  python3: 71,
};

const PROCESSING_STATUS_IDS = new Set([1, 2]);
const ACCEPTED_STATUS_ID = 3;

export async function executeCode({ language, files, stdin = "" }) {
  const sourceCode = getSourceCode(files);
  const languageId = getJudge0LanguageId(language);
  const apiBaseUrl = getJudge0ApiBaseUrl();
  const timeoutMs = getExecutionTimeoutMs();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const token = await createSubmission({ apiBaseUrl, languageId, sourceCode, stdin, signal: controller.signal });
    const result = await pollSubmission({ apiBaseUrl, token, signal: controller.signal });
    return toAppExecutionResult(decodeSubmissionResult(result));
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

async function createSubmission({ apiBaseUrl, languageId, sourceCode, stdin, signal }) {
  const response = await fetch(`${apiBaseUrl}/submissions?base64_encoded=true&wait=false`, {
    method: "POST",
    headers: buildJudge0Headers(),
    body: JSON.stringify({
      language_id: languageId,
      source_code: encodeBase64(sourceCode),
      stdin: stdin ? encodeBase64(stdin) : undefined,
    }),
    signal,
  });

  if (!response.ok) {
    throw await getJudge0ServiceError(response);
  }

  const data = await response.json();

  if (!data?.token) {
    throw createExecutionError("Code execution service did not return a submission token.", 502);
  }

  return data.token;
}

async function pollSubmission({ apiBaseUrl, token, signal }) {
  const pollIntervalMs = getPollIntervalMs();
  const maxPollAttempts = getMaxPollAttempts();
  const fields = "stdout,stderr,compile_output,message,status,time,memory,token";

  for (let attempt = 0; attempt < maxPollAttempts; attempt += 1) {
    if (attempt > 0) {
      await delay(pollIntervalMs, signal);
    }

    const response = await fetch(
      `${apiBaseUrl}/submissions/${token}?base64_encoded=true&fields=${fields}`,
      {
        method: "GET",
        headers: buildJudge0Headers(),
        signal,
      }
    );

    if (!response.ok) {
      throw await getJudge0ServiceError(response);
    }

    const result = await response.json();

    if (!PROCESSING_STATUS_IDS.has(result?.status?.id)) {
      return result;
    }
  }

  throw createExecutionError("Code execution timed out while waiting for Judge0.", 504);
}

function toAppExecutionResult(result) {
  const stdout = result.stdout || "";
  const compileOutput = result.compile_output || "";
  const message = result.message || "";
  const status = result.status || { id: 13, description: "Internal Error" };
  const statusDescription = status.description || "Execution failed";
  const failed = status.id !== ACCEPTED_STATUS_ID;
  const stderr = result.stderr || (failed && !compileOutput ? message || statusDescription : "");
  const output = stdout || stderr || compileOutput || message || statusDescription || "No output";

  return {
    run: {
      stdout,
      stderr,
      output,
      code: failed ? 1 : 0,
      signal: null,
      message,
      status: statusDescription,
      time: result.time ?? null,
      memory: result.memory ?? null,
    },
    compile: compileOutput
      ? {
          stdout: "",
          stderr: compileOutput,
          output: compileOutput,
          code: 1,
          signal: null,
          message: compileOutput,
          status: statusDescription,
        }
      : undefined,
    status,
    time: result.time ?? null,
    memory: result.memory ?? null,
    token: result.token,
  };
}

function decodeSubmissionResult(result) {
  return {
    ...result,
    stdout: decodeBase64Field(result.stdout),
    stderr: decodeBase64Field(result.stderr),
    compile_output: decodeBase64Field(result.compile_output),
    message: decodeBase64Field(result.message),
  };
}

function getSourceCode(files) {
  if (!Array.isArray(files) || files.length === 0) {
    throw createExecutionError("Code file is required.", 400);
  }

  const sourceCode = files[0]?.content;

  if (typeof sourceCode !== "string" || !sourceCode.trim()) {
    throw createExecutionError("Code is required.", 400);
  }

  return sourceCode;
}

function getJudge0LanguageId(language) {
  const normalizedLanguage = language?.trim().toLowerCase();
  const languageId = JUDGE0_LANGUAGE_IDS[normalizedLanguage];

  if (!languageId) {
    throw createExecutionError(`Unsupported language: ${language}`, 400);
  }

  return languageId;
}

function getJudge0ApiBaseUrl() {
  if (!ENV.JUDGE0_API_URL?.trim()) {
    throw createExecutionError("JUDGE0_API_URL is not configured on the server.", 500);
  }

  return normalizeJudge0BaseUrl(ENV.JUDGE0_API_URL);
}

function normalizeJudge0BaseUrl(url) {
  return url
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/submissions(?:\/.*)?$/i, "");
}

function buildJudge0Headers() {
  const headers = {
    "Content-Type": "application/json",
  };

  const apiKey = ENV.JUDGE0_API_KEY?.trim();
  const apiHost = ENV.JUDGE0_API_HOST?.trim();

  if (apiKey && apiHost) {
    headers["X-RapidAPI-Key"] = apiKey;
    headers["X-RapidAPI-Host"] = apiHost;
  } else if (apiKey) {
    headers["X-Auth-Token"] = apiKey;
  }

  return headers;
}

function getExecutionTimeoutMs() {
  const configuredTimeout = Number(ENV.JUDGE0_API_TIMEOUT_MS);

  if (Number.isFinite(configuredTimeout) && configuredTimeout > 0) {
    return configuredTimeout;
  }

  return DEFAULT_EXECUTION_TIMEOUT_MS;
}

function getPollIntervalMs() {
  const configuredInterval = Number(ENV.JUDGE0_POLL_INTERVAL_MS);

  if (Number.isFinite(configuredInterval) && configuredInterval > 0) {
    return configuredInterval;
  }

  return DEFAULT_POLL_INTERVAL_MS;
}

function getMaxPollAttempts() {
  const configuredAttempts = Number(ENV.JUDGE0_MAX_POLL_ATTEMPTS);

  if (Number.isInteger(configuredAttempts) && configuredAttempts > 0) {
    return configuredAttempts;
  }

  return DEFAULT_MAX_POLL_ATTEMPTS;
}

async function getJudge0ServiceError(response) {
  const responseMessage = await readResponseMessage(response);

  if (response.status === 400 || response.status === 422) {
    return createExecutionError(responseMessage || "Invalid code execution request.", 400);
  }

  if (response.status === 401 || response.status === 403) {
    return createExecutionError(getCredentialsErrorMessage(response.status), 502);
  }

  if (response.status === 429) {
    return createExecutionError("Judge0 rate limit exceeded. Please try again later.", 429);
  }

  if (response.status >= 500) {
    return createExecutionError("Judge0 is unavailable. Please try again later.", 502);
  }

  return createExecutionError(
    responseMessage || `Judge0 returned HTTP ${response.status}.`,
    502
  );
}

function getCredentialsErrorMessage(status) {
  if (!ENV.JUDGE0_API_KEY?.trim()) {
    return `Judge0 returned ${status}. Set JUDGE0_API_KEY if your Judge0 provider requires credentials.`;
  }

  return `Judge0 returned ${status}. Check JUDGE0_API_KEY and JUDGE0_API_HOST.`;
}

async function readResponseMessage(response) {
  try {
    const data = await response.clone().json();
    const message = data?.message || data?.error || data?.detail;

    if (message) {
      return Array.isArray(message) ? message.join(" ") : String(message);
    }

    if (typeof data === "object") {
      return Object.values(data).flat().join(" ");
    }
  } catch {
    try {
      return await response.text();
    } catch {
      return "";
    }
  }

  return "";
}

function encodeBase64(value) {
  return Buffer.from(value, "utf8").toString("base64");
}

function decodeBase64Field(value) {
  if (!value) return "";

  try {
    return Buffer.from(value, "base64").toString("utf8");
  } catch {
    return value;
  }
}

function delay(ms, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms);

    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        reject(createAbortError());
      },
      { once: true }
    );
  });
}

function createAbortError() {
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}

function createExecutionError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function isNetworkError(error) {
  return error instanceof TypeError || /fetch failed|network|ECONN|ENOTFOUND|ETIMEDOUT/i.test(error.message || "");
}
