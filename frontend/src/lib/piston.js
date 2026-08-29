import axiosInstance from "./axios";

const EXECUTION_UNAVAILABLE_MESSAGE =
  "Code execution service is unavailable. Please try again later.";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  c: { language: "c", version: "10.2.0" },
  cpp: { language: "c++", version: "10.2.0" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  const requestPayload = buildExecutionRequest(language, code);

  if (!requestPayload) {
    return {
      success: false,
      error: `Unsupported language: ${language}`,
    };
  }

  try {
    const response = await axiosInstance.post("/execute", requestPayload);
    return toExecutionResult(response.data);
  } catch (error) {
    return {
      success: false,
      error: getApiErrorMessage(error),
    };
  }
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
  if (data?.message || data?.error) {
    return {
      success: false,
      error: data.message || data.error,
    };
  }

  const output = data?.run?.output || data?.run?.stdout || "";
  const stderr = data?.run?.stderr || data?.compile?.stderr || data?.compile?.output || "";

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

function getApiErrorMessage(error) {
  return error.response?.data?.message || error.message || EXECUTION_UNAVAILABLE_MESSAGE;
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
