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
    return injectIntoMainBlock(
      sourceCode,
      /public\s+static\s+void\s+main\s*\(\s*String\[\]\s+\w+\s*\)/,
      hiddenTestCode
    );
  }

  if (language === "c" || language === "cpp") {
    return injectIntoMainBlock(sourceCode, /int\s+main\s*\([^)]*\)/, hiddenTestCode);
  }

  const commentPrefix = COMMENT_PREFIX[language] || "//";
  return `${sourceCode}\n\n${commentPrefix} Hidden test cases\n${hiddenTestCode}`;
}

function injectIntoMainBlock(sourceCode, signaturePattern, hiddenTestCode) {
  const match = signaturePattern.exec(sourceCode);

  if (!match) {
    return `${sourceCode}\n\n${hiddenTestCode}`;
  }

  const openingBraceIndex = sourceCode.indexOf("{", match.index);

  if (openingBraceIndex === -1) {
    return `${sourceCode}\n\n${hiddenTestCode}`;
  }

  const closingBraceIndex = findMatchingBrace(sourceCode, openingBraceIndex);

  if (closingBraceIndex === -1) {
    return `${sourceCode}\n\n${hiddenTestCode}`;
  }

  const indentedHiddenTests = indentSnippet(hiddenTestCode, "    ");
  return `${sourceCode.slice(0, closingBraceIndex)}\n${indentedHiddenTests}\n${sourceCode.slice(
    closingBraceIndex
  )}`;
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
