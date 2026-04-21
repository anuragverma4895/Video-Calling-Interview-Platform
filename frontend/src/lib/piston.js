// Piston API code execution - uses backend proxy to avoid CORS issues

import axiosInstance from "./axios";

const DIRECT_EXECUTION_API = import.meta.env.VITE_PISTON_API_URL?.trim();

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  c: { language: "c", version: "10.2.0" },
  cpp: { language: "c++", version: "10.2.0" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  const requestPayload = buildExecutionRequest(language, code);

  try {
    if (!requestPayload) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await axiosInstance.post("/execute", requestPayload);
    const backendResult = toExecutionResult(response.data);

    if (shouldRetryDirectExecution(backendResult)) {
      try {
        const directResult = await executeCodeDirect(language, code, requestPayload);

        if (directResult.success || !shouldRetryDirectExecution(directResult)) {
          return directResult;
        }
      } catch {
        return backendResult;
      }
    }

    return backendResult;
  } catch (error) {
    // If backend proxy fails, try direct Piston API as fallback
    try {
      return await executeCodeDirect(language, code, requestPayload);
    } catch (fallbackError) {
      return {
        success: false,
        error: `Failed to execute code: ${
          fallbackError.message || error.response?.data?.message || error.message
        }`,
      };
    }
  }
}

/**
 * Direct Piston API call as fallback
 */
async function executeCodeDirect(language, code, requestPayload = buildExecutionRequest(language, code)) {
  if (!DIRECT_EXECUTION_API) {
    return {
      success: false,
      error:
        "No direct execution service is configured. Install the required compiler/runtime on the server or set VITE_PISTON_API_URL.",
    };
  }

  const response = await fetch(normalizeExecutionServiceUrl(DIRECT_EXECUTION_API), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestPayload),
  });

  if (!response.ok) {
    return {
      success: false,
      error: `HTTP error! status: ${response.status}`,
    };
  }

  const data = await response.json();
  return toExecutionResult(data);
}

function buildExecutionRequest(language, code) {
  const languageConfig = LANGUAGE_VERSIONS[language];

  if (!languageConfig) {
    return null;
  }

  return {
    language: languageConfig.language,
    version: languageConfig.version,
    files: buildExecutionFiles(language, code),
  };
}

function buildExecutionFiles(language, code) {
  if (language === "java") {
    return [
      {
        name: getJavaFileName(code),
        content: code,
      },
    ];
  }

  return [
    {
      name: `main.${getFileExtension(language)}`,
      content: code,
    },
  ];
}

function toExecutionResult(data) {
  const output = data.run?.output || data.run?.stdout || "";
  const stderr = data.run?.stderr || data.compile?.stderr || data.compile?.output || "";

  if (stderr) {
    return {
      success: false,
      output,
      error: stderr,
    };
  }

  return {
    success: true,
    output: output || "No output",
  };
}

function shouldRetryDirectExecution(result) {
  if (!result || result.success) {
    return false;
  }

  return /is not installed on this server|spawn EPERM|operation not permitted/i.test(
    result.error || ""
  );
}

function normalizeExecutionServiceUrl(url) {
  return url.endsWith("/execute") ? url : `${url.replace(/\/+$/, "")}/execute`;
}

function getJavaFileName(sourceCode = "") {
  const mainMethodIndex = sourceCode.search(/\bpublic\s+static\s+void\s+main\s*\(/);

  if (mainMethodIndex !== -1) {
    const classesBeforeMain = [
      ...sourceCode
        .slice(0, mainMethodIndex)
        .matchAll(/\b(?:public\s+)?class\s+([A-Za-z_]\w*)/g),
    ];

    if (classesBeforeMain.length > 0) {
      return `${classesBeforeMain[classesBeforeMain.length - 1][1]}.java`;
    }
  }

  const publicClassMatch = sourceCode.match(/\bpublic\s+class\s+([A-Za-z_]\w*)/);
  if (publicClassMatch) {
    return `${publicClassMatch[1]}.java`;
  }

  const classMatch = sourceCode.match(/\bclass\s+([A-Za-z_]\w*)/);
  if (classMatch) {
    return `${classMatch[1]}.java`;
  }

  return "Main.java";
}

function getFileExtension(language) {
  switch (language) {
    case "javascript":
      return "js";
    case "python":
      return "py";
    case "c":
      return "c";
    case "cpp":
      return "cpp";
    default:
      return "txt";
  }
}
