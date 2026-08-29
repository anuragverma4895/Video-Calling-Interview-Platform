import { EASY_PROBLEMS_1 } from "./easyProblems1.js";
import { EASY_PROBLEMS_2 } from "./easyProblems2.js";
import { EASY_PROBLEMS_3 } from "./easyProblems3.js";
import { MEDIUM_PROBLEMS_1 } from "./mediumProblems1.js";
import { MEDIUM_PROBLEMS_2 } from "./mediumProblems2.js";
import { HARD_PROBLEMS } from "./hardProblems.js";

const EASY_PROBLEMS = [
  ...Object.values(EASY_PROBLEMS_1),
  ...Object.values(EASY_PROBLEMS_2),
  ...Object.values(EASY_PROBLEMS_3),
];

const MEDIUM_PROBLEMS = [
  ...Object.values(MEDIUM_PROBLEMS_1),
  ...Object.values(MEDIUM_PROBLEMS_2),
];

const HARD_PROBLEMS_LIST = Object.values(HARD_PROBLEMS);

function sortByOriginalOrder(problems) {
  return [...problems].sort((a, b) => (a.order || 0) - (b.order || 0));
}

function buildMixedProblemList() {
  const groups = {
    Easy: sortByOriginalOrder(EASY_PROBLEMS),
    Medium: sortByOriginalOrder(MEDIUM_PROBLEMS),
    Hard: sortByOriginalOrder(HARD_PROBLEMS_LIST),
  };

  const difficultyPattern = [
    "Hard",
    "Medium",
    "Easy",
    "Medium",
    "Hard",
    "Easy",
    "Medium",
    "Easy",
    "Hard",
    "Medium",
    "Easy",
    "Medium",
    "Hard",
    "Easy",
    "Medium",
    "Easy",
    "Hard",
    "Medium",
    "Easy",
    "Medium",
  ];
  const totalProblems = Object.values(groups).reduce((total, group) => total + group.length, 0);
  const mixedProblems = [];
  let patternIndex = 0;

  while (mixedProblems.length < totalProblems) {
    const difficulty = difficultyPattern[patternIndex % difficultyPattern.length];
    const group = groups[difficulty];

    if (group?.length) {
      mixedProblems.push(group.shift());
    }

    patternIndex += 1;
  }

  return mixedProblems.map((problem, index) => ({
    ...problem,
    order: index + 1,
  }));
}

export const PROBLEMS = Object.fromEntries(
  buildMixedProblemList().map((problem) => [problem.id, problem])
);

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
    fileExt: ".js",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
    fileExt: ".py",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
    fileExt: ".java",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
    fileExt: ".c",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
    fileExt: ".cpp",
  },
};


