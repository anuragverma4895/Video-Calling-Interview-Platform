// We use Wandbox API instead of Piston since EMKC Piston now requires an API key.

const WANDBOX_API = "https://wandbox.org/api/compile.json";

const LANGUAGE_VERSIONS = {
  javascript: { compiler: "nodejs-head" },
  python: { compiler: "cpython-head" },
  java: { compiler: "openjdk-head" },
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

    const response = await fetch(WANDBOX_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        compiler: languageConfig.compiler,
        code: code,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    // Wandbox returns outputs in program_message and errors in program_error / compiler_error
    const output = data.program_message || "";
    const stderr = data.program_error || data.compiler_error || "";

    if (data.status !== "0" || stderr) {
      return {
        success: false,
        output: output,
        error: stderr || `Process exited with status ${data.status}`,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };

  return extensions[language] || "txt";
}
