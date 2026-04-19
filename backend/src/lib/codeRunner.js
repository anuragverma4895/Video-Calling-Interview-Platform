import { spawn } from "child_process";
import fs from "fs/promises";
import os from "os";
import path from "path";

const EXECUTION_TIMEOUT_MS = 5000;

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
      const compileResult = await runCommand("javac", [mainFile], { cwd: workDir });

      if (compileResult.exitCode !== 0) {
        return { compileResult };
      }

      const mainClass = getJavaMainClass(sourceCode);
      const runResult = await runCommand("java", ["-cp", workDir, mainClass], { cwd: workDir });

      return { compileResult, runResult };
    },
  },
};

export async function executeCode({ language, version, files }) {
  const runner = LANGUAGE_RUNNERS[language];

  if (!runner) {
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

  const workDir = await fs.mkdtemp(path.join(os.tmpdir(), "video-calling-interview-platform-"));

  try {
    const sanitizedFiles = files.map((file) => ({
      name: path.basename(file.name || "main.txt"),
      content: file.content || "",
    }));

    await Promise.all(
      sanitizedFiles.map((file) => fs.writeFile(path.join(workDir, file.name), file.content, "utf8"))
    );

    const mainFile = sanitizedFiles[0]?.name;
    const sourceCode = sanitizedFiles[0]?.content || "";

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

function getJavaMainClass(sourceCode) {
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
