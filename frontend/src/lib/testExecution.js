const COMMENT_PREFIX = {
  javascript: "//",
  python: "#",
  java: "//",
  c: "//",
  cpp: "//",
};

export function normalizeOutput(output = "") {
  return String(output)
    .trim()
    .split("\n")
    .map((line) =>
      line.trim().replace(/\[\s+/g, "[").replace(/\s+\]/g, "]").replace(/\s*,\s*/g, ",")
    )
    .filter((line) => line.length > 0)
    .join("\n");
}

export function doOutputsMatch(actualOutput = "", expectedOutput = "") {
  return normalizeOutput(actualOutput) === normalizeOutput(expectedOutput);
}

export function doesOutputEndWithExpected(actualOutput = "", expectedOutput = "") {
  const normalizedActual = normalizeOutput(actualOutput);
  const normalizedExpected = normalizeOutput(expectedOutput);

  if (!normalizedExpected) {
    return normalizedActual === normalizedExpected;
  }

  return (
    normalizedActual === normalizedExpected ||
    normalizedActual.endsWith(`\n${normalizedExpected}`)
  );
}

export function buildHiddenTestSource(language, sourceCode, hiddenTestCode) {
  if (!hiddenTestCode) {
    return sourceCode;
  }

  if (language === "java") {
    return (
      injectIntoMainBlock(
        sourceCode,
        /public\s+static\s+void\s+main\s*\(\s*(?:final\s+)?String\s*(?:\[\s*\]|\.\.\.)\s+\w+\s*\)/,
        hiddenTestCode
      ) ||
      injectIntoJavaClass(sourceCode, hiddenTestCode) ||
      `${sourceCode}\n\n${hiddenTestCode}`
    );
  }

  if (language === "c" || language === "cpp") {
    return (
      injectIntoMainBlock(sourceCode, /int\s+main\s*\([^)]*\)/, hiddenTestCode) ||
      `${sourceCode}\n\n${hiddenTestCode}`
    );
  }

  const commentPrefix = COMMENT_PREFIX[language] || "//";
  return `${sourceCode}\n\n${commentPrefix} Hidden test cases\n${hiddenTestCode}`;
}

function injectIntoJavaClass(sourceCode, hiddenTestCode) {
  const className = getJavaExecutionClassName(sourceCode);

  if (!className) {
    return null;
  }

  const classPattern = new RegExp(`\\b(?:public\\s+)?class\\s+${className}\\b`);
  const generatedMainMethod = [
    "",
    "    public static void main(String[] args) {",
    indentSnippet(hiddenTestCode, "        "),
    "    }",
  ].join("\n");

  return injectIntoClassBlock(sourceCode, classPattern, generatedMainMethod);
}

function injectIntoMainBlock(sourceCode, signaturePattern, hiddenTestCode) {
  const match = signaturePattern.exec(sourceCode);

  if (!match) {
    return null;
  }

  const openingBraceIndex = sourceCode.indexOf("{", match.index);

  if (openingBraceIndex === -1) {
    return null;
  }

  const closingBraceIndex = findMatchingBrace(sourceCode, openingBraceIndex);

  if (closingBraceIndex === -1) {
    return null;
  }

  const indentedHiddenTests = indentSnippet(hiddenTestCode, "    ");
  return `${sourceCode.slice(0, closingBraceIndex)}\n${indentedHiddenTests}\n${sourceCode.slice(
    closingBraceIndex
  )}`;
}

function injectIntoClassBlock(sourceCode, classPattern, snippet) {
  const match = classPattern.exec(sourceCode);

  if (!match) {
    return null;
  }

  const openingBraceIndex = sourceCode.indexOf("{", match.index);

  if (openingBraceIndex === -1) {
    return null;
  }

  const closingBraceIndex = findMatchingBrace(sourceCode, openingBraceIndex);

  if (closingBraceIndex === -1) {
    return null;
  }

  return `${sourceCode.slice(0, closingBraceIndex)}${snippet}\n${sourceCode.slice(
    closingBraceIndex
  )}`;
}

function getJavaExecutionClassName(sourceCode) {
  const publicClassMatch = sourceCode.match(/\bpublic\s+class\s+([A-Za-z_]\w*)/);

  if (publicClassMatch) {
    return publicClassMatch[1];
  }

  const classMatches = [...sourceCode.matchAll(/\bclass\s+([A-Za-z_]\w*)/g)];
  if (classMatches.length > 0) {
    return classMatches[classMatches.length - 1][1];
  }

  return null;
}

function findMatchingBrace(sourceCode, openingBraceIndex) {
  let depth = 0;

  for (let index = openingBraceIndex; index < sourceCode.length; index += 1) {
    const char = sourceCode[index];

    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function indentSnippet(snippet, indentation) {
  return snippet
    .split("\n")
    .map((line) => (line.length > 0 ? `${indentation}${line}` : line))
    .join("\n");
}
