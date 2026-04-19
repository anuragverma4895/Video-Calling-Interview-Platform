// Piston API code execution - uses backend proxy to avoid CORS issues

import axiosInstance from "./axios";

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
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await axiosInstance.post("/execute", {
      language: languageConfig.language,
      version: languageConfig.version,
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: code,
        },
      ],
    });

    const data = response.data;

    const output = data.run?.output || data.run?.stdout || "";
    const stderr = data.run?.stderr || data.compile?.stderr || data.compile?.output || "";

    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    // If backend proxy fails, try direct Piston API as fallback
    try {
      return await executeCodeDirect(language, code);
    } catch (fallbackError) {
      return {
        success: false,
        error: `Failed to execute code: ${fallbackError.message || error.message}`,
      };
    }
  }
}

/**
 * Direct Piston API call as fallback
 */
async function executeCodeDirect(language, code) {
  const PISTON_API = "https://emkc.org/api/v2/piston";
  const languageConfig = LANGUAGE_VERSIONS[language];

  const response = await fetch(`${PISTON_API}/execute`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: languageConfig.language,
      version: languageConfig.version,
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: code,
        },
      ],
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      error: `HTTP error! status: ${response.status}`,
    };
  }

  const data = await response.json();
  const output = data.run?.output || data.run?.stdout || "";
  const stderr = data.run?.stderr || data.compile?.stderr || data.compile?.output || "";

  if (stderr) {
    return { success: false, output, error: stderr };
  }

  return { success: true, output: output || "No output" };
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
    c: "c",
    cpp: "cpp",
  };

  return extensions[language] || "txt";
}
