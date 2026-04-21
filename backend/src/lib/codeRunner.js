import { spawn } from "child_process";
import fs from "fs/promises";
import os from "os";
import path from "path";

const EXECUTION_TIMEOUT_MS = 5000;
const PISTON_API_URL = process.env.PISTON_API_URL?.trim();
const JAVA_BINARY_CACHE = new Map();

const LANGUAGE_RUNNERS = {
  javascript: {
    execute: async ({ mainFile, workDir }) => ({
      runResult: await runCommand("node", [mainFile], { cwd: workDir }),
    }),
  },
  python: {
    execute: async ({ mainFile, workDir }) => ({
      runResult: await runCommand("python", [mainFile], { cwd: workDir }),
    }),
  },
  c: {
    execute: async ({ mainFile, workDir }) => {
      const outputFile = path.join(workDir, "program.exe");
      const compileResult = await runCommand("gcc", [mainFile, "-o", outputFile], { cwd: workDir });

      if (compileResult.exitCode !== 0) {
        return { compileResult };
      }

      const runResult = await runCommand(outputFile, [], { cwd: workDir });
      return { compileResult, runResult };
    },
  },
  "c++": {
    execute: async ({ mainFile, workDir }) => {
      const outputFile = path.join(workDir, "program.exe");
      const compileResult = await runCommand("g++", [mainFile, "-o", outputFile], { cwd: workDir });

      if (compileResult.exitCode !== 0) {
        return { compileResult };
      }

      const runResult = await runCommand(outputFile, [], { cwd: workDir });
      return { compileResult, runResult };
    },
  },
  java: {
    execute: async ({ mainFile, workDir, sourceCode }) => {
      const javacCommand = await resolveJavaBinary("javac");
      const javaCommand = await resolveJavaBinary("java");
      const compileResult = await runCommand(javacCommand, [mainFile], { cwd: workDir });

      if (compileResult.exitCode !== 0) {
        return { compileResult };
      }

      const mainClass = getJavaMainClass(sourceCode);
      const runResult = await runCommand(javaCommand, ["-cp", workDir, mainClass], { cwd: workDir });

      return { compileResult, runResult };
    },
  },
};

export async function executeCode({ language, version, files }) {
  const runner = LANGUAGE_RUNNERS[language];
  const preparedFiles = prepareFilesForExecution(language, files);
  const localResult = runner
    ? await executeCodeLocally({ language, version, files: preparedFiles, runner })
    : null;

  if (localResult && !shouldFallbackToPiston(localResult)) {
    return localResult;
  }

  const pistonResult = await executeCodeWithPiston({ language, version, files: preparedFiles });
  if (pistonResult) {
    return pistonResult;
  }

  if (localResult) {
    return localResult;
  }

  return {
    language,
    version,
    run: {
      output: "",
      stdout: "",
      stderr: `Unsupported language: ${language}`,
      code: -1,
    },
  };
}

function getJavaMainClass(sourceCode) {
  const mainMethodIndex = sourceCode.search(/\bpublic\s+static\s+void\s+main\s*\(/);

  if (mainMethodIndex !== -1) {
    const classesBeforeMain = [
      ...sourceCode
        .slice(0, mainMethodIndex)
        .matchAll(/\b(?:public\s+)?class\s+([A-Za-z_]\w*)/g),
    ];

    if (classesBeforeMain.length > 0) {
      return classesBeforeMain[classesBeforeMain.length - 1][1];
    }
  }

  const publicClassMatch = sourceCode.match(/\bpublic\s+class\s+([A-Za-z_]\w*)/);

  if (publicClassMatch) {
    return publicClassMatch[1];
  }

  const classMatch = sourceCode.match(/\bclass\s+([A-Za-z_]\w*)/);
  return classMatch?.[1] || "Main";
}

function toExecutionPayload(result) {
  if (!result) {
    return {
      output: "",
      stdout: "",
      stderr: "",
      code: 0,
    };
  }

  const stderr = result.stderr || "";
  const stdout = result.stdout || "";

  return {
    output: stdout,
    stdout,
    stderr,
    code: result.exitCode,
  };
}

function runCommand(command, args, { cwd }) {
  return new Promise((resolve) => {
    let stdout = "";
    let stderr = "";
    let settled = false;

    const child = spawn(command, args, {
      cwd,
      shell: false,
      windowsHide: true,
    });

    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      resolve(result);
    };

    const timeoutId = setTimeout(() => {
      child.kill();
      finish({
        stdout,
        stderr: `${stderr}\nExecution timed out after ${EXECUTION_TIMEOUT_MS}ms.`.trim(),
        exitCode: -1,
      });
    }, EXECUTION_TIMEOUT_MS);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      finish({
        stdout,
        stderr:
          error.code === "ENOENT"
            ? `${command} is not installed on this server.`
            : error.message || "Failed to start process",
        exitCode: -1,
      });
    });

    child.on("close", (code) => {
      finish({
        stdout,
        stderr,
        exitCode: code ?? 0,
      });
    });
  });
}

async function executeCodeLocally({ language, version, files, runner }) {
  const workDir = await fs.mkdtemp(path.join(os.tmpdir(), "video-calling-interview-platform-"));

  try {
    await Promise.all(
      files.map((file) => fs.writeFile(path.join(workDir, file.name), file.content, "utf8"))
    );

    const mainFile = files[0]?.name;
    const sourceCode = files[0]?.content || "";

    const { compileResult, runResult } = await runner.execute({
      mainFile,
      workDir,
      sourceCode,
    });

    return {
      language,
      version,
      ...(compileResult ? { compile: toExecutionPayload(compileResult) } : {}),
      run: toExecutionPayload(runResult),
    };
  } catch (error) {
    return {
      language,
      version,
      run: {
        output: "",
        stdout: "",
        stderr: error.message || "Unexpected execution error",
        code: -1,
      },
    };
  } finally {
    await fs.rm(workDir, { recursive: true, force: true });
  }
}

async function executeCodeWithPiston({ language, version, files }) {
  if (!PISTON_API_URL) {
    return null;
  }

  try {
    const response = await fetch(normalizeExecutionServiceUrl(PISTON_API_URL), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, version, files }),
      signal: AbortSignal.timeout(EXECUTION_TIMEOUT_MS + 5000),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

function prepareFilesForExecution(language, files = []) {
  const sanitizedFiles = files.map((file, index) => ({
    name: path.basename(file?.name || getDefaultFileName(language, index)),
    content: file?.content || "",
  }));

  if (language !== "java" || sanitizedFiles.length === 0) {
    return sanitizedFiles;
  }

  const [mainFile, ...rest] = sanitizedFiles;

  return [
    {
      ...mainFile,
      name: resolveJavaFileName(mainFile.content, mainFile.name),
    },
    ...rest,
  ];
}

function getDefaultFileName(language, index) {
  if (index > 0) {
    return `file-${index + 1}.txt`;
  }

  switch (language) {
    case "javascript":
      return "main.js";
    case "python":
      return "main.py";
    case "java":
      return "Main.java";
    case "c":
      return "main.c";
    case "c++":
      return "main.cpp";
    default:
      return "main.txt";
  }
}

function resolveJavaFileName(sourceCode, currentName) {
  const mainClass = getJavaMainClass(sourceCode);

  if (mainClass) {
    return `${mainClass}.java`;
  }

  return currentName.toLowerCase().endsWith(".java") ? currentName : "Main.java";
}

function shouldFallbackToPiston(result) {
  return [result.compile, result.run]
    .filter(Boolean)
    .some(
      (execution) =>
        execution.code === -1 &&
        /is not installed on this server|Failed to start process|spawn EPERM|operation not permitted/i.test(
          execution.stderr || ""
        )
    );
}

function normalizeExecutionServiceUrl(url) {
  return url.endsWith("/execute") ? url : `${url.replace(/\/+$/, "")}/execute`;
}

async function resolveJavaBinary(binaryName) {
  if (process.platform !== "win32") {
    return binaryName;
  }

  if (JAVA_BINARY_CACHE.has(binaryName)) {
    return JAVA_BINARY_CACHE.get(binaryName);
  }

  const executableName = `${binaryName}.exe`;
  const candidateDirectories = [
    process.env.JAVA_HOME ? path.join(process.env.JAVA_HOME, "bin") : null,
    ...(await getWindowsJavaBinDirectories("Eclipse Adoptium")),
    ...(await getWindowsJavaBinDirectories("Java")),
  ].filter(Boolean);

  for (const directory of new Set(candidateDirectories)) {
    const candidatePath = path.join(directory, executableName);

    if (await pathExists(candidatePath)) {
      JAVA_BINARY_CACHE.set(binaryName, candidatePath);
      return candidatePath;
    }
  }

  JAVA_BINARY_CACHE.set(binaryName, binaryName);
  return binaryName;
}

async function getWindowsJavaBinDirectories(vendorFolder) {
  const roots = [process.env.ProgramFiles, process.env["ProgramW6432"]]
    .filter(Boolean)
    .map((basePath) => path.join(basePath, vendorFolder));

  const binDirectories = [];

  for (const root of new Set(roots)) {
    try {
      const entries = await fs.readdir(root, { withFileTypes: true });

      entries
        .filter((entry) => entry.isDirectory())
        .forEach((entry) => {
          binDirectories.push(path.join(root, entry.name, "bin"));
        });
    } catch {
      // Ignore missing vendor folders.
    }
  }

  return binDirectories;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
