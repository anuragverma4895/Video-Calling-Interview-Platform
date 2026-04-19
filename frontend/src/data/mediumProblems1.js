export const MEDIUM_PROBLEMS_1 = {
  "container-with-most-water": {
    id: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", category: "Array • Two Pointers", order: 36,
    description: { text: "Given an array height of length n, find two lines that together with x-axis form a container with the most water.", notes: [] },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}\n\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));\nconsole.log(maxArea([1,1]));`,
      python: `def maxArea(height):\n    # Write your solution here\n    pass\n\nprint(maxArea([1,8,6,2,5,4,8,3,7]))\nprint(maxArea([1,1]))`,
      java: `class Solution {\n    public static int maxArea(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));\n        System.out.println(maxArea(new int[]{1,1}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint maxArea(int* height, int heightSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int h[]={1,8,6,2,5,4,8,3,7}; printf("%d\\n", maxArea(h,9));\n    int h2[]={1,1}; printf("%d\\n", maxArea(h2,2));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxArea(vector<int>& height) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> h={1,8,6,2,5,4,8,3,7}; cout<<maxArea(h)<<endl;\n    vector<int> h2={1,1}; cout<<maxArea(h2)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "49\n1", python: "49\n1", java: "49\n1", c: "49\n1", cpp: "49\n1" },
    hiddenTests: {
      javascript: { code: `console.log(maxArea([4,3,2,1,4]));`, expected: "16" },
      python: { code: `print(maxArea([4,3,2,1,4]))`, expected: "16" },
      java: { code: `System.out.println(maxArea(new int[]{4,3,2,1,4}));`, expected: "16" },
      c: { code: `int x[]={4,3,2,1,4};printf("%d\\n",maxArea(x,5));`, expected: "16" },
      cpp: { code: `vector<int> x={4,3,2,1,4};cout<<maxArea(x)<<endl;`, expected: "16" },
    },
  },

  "three-sum": {
    id: "three-sum", title: "3Sum", difficulty: "Medium", category: "Array • Two Pointers • Sorting", order: 37,
    description: { text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.", notes: ["The solution set must not contain duplicate triplets."] },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}\n\nconsole.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));\nconsole.log(JSON.stringify(threeSum([0,0,0])));`,
      python: `def threeSum(nums):\n    # Write your solution here\n    pass\n\nprint(threeSum([-1,0,1,2,-1,-4]))\nprint(threeSum([0,0,0]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));\n        System.out.println(threeSum(new int[]{0,0,0}));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}\n\nvoid threeSum(int* nums, int numsSize) {\n    qsort(nums,numsSize,sizeof(int),cmp);\n    // Write your solution here - print triplets\n}\n\nint main() {\n    int n1[]={-1,0,1,2,-1,-4};\n    threeSum(n1, 6);\n    int n2[]={0,0,0};\n    threeSum(n2, 3);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> threeSum(vector<int>& nums) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> n1={-1,0,1,2,-1,-4};\n    auto r1=threeSum(n1);\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<"["<<r1[i][0]<<","<<r1[i][1]<<","<<r1[i][2]<<"]";}cout<<"]"<<endl;\n    vector<int> n2={0,0,0};\n    auto r2=threeSum(n2);\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<"["<<r2[i][0]<<","<<r2[i][1]<<","<<r2[i][2]<<"]";}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[[-1,-1,2],[-1,0,1]]\n[[0,0,0]]", python: "[[-1, -1, 2], [-1, 0, 1]]\n[[0, 0, 0]]", java: "[[-1, -1, 2], [-1, 0, 1]]\n[[0, 0, 0]]", c: "", cpp: "[[-1,-1,2],[-1,0,1]]\n[[0,0,0]]" },
    hiddenTests: {
      javascript: { code: `console.log(JSON.stringify(threeSum([0,1,1])));`, expected: "[]" },
      python: { code: `print(threeSum([0,1,1]))`, expected: "[]" },
      java: { code: `System.out.println(threeSum(new int[]{0,1,1}));`, expected: "[]" },
      c: { code: ``, expected: "" },
      cpp: { code: `vector<int> x={0,1,1};auto r=threeSum(x);cout<<"[";for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<"["<<r[i][0]<<","<<r[i][1]<<","<<r[i][2]<<"]";}cout<<"]"<<endl;`, expected: "[]" },
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "String • Sliding Window", order: 38,
    description: { text: "Given a string s, find the length of the longest substring without repeating characters.", notes: [] },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\n\nconsole.log(lengthOfLongestSubstring("abcabcbb"));\nconsole.log(lengthOfLongestSubstring("bbbbb"));\nconsole.log(lengthOfLongestSubstring("pwwkew"));`,
      python: `def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass\n\nprint(lengthOfLongestSubstring("abcabcbb"))\nprint(lengthOfLongestSubstring("bbbbb"))\nprint(lengthOfLongestSubstring("pwwkew"))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring("abcabcbb"));\n        System.out.println(lengthOfLongestSubstring("bbbbb"));\n        System.out.println(lengthOfLongestSubstring("pwwkew"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nint lengthOfLongestSubstring(char* s) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", lengthOfLongestSubstring("abcabcbb"));\n    printf("%d\\n", lengthOfLongestSubstring("bbbbb"));\n    printf("%d\\n", lengthOfLongestSubstring("pwwkew"));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<lengthOfLongestSubstring("abcabcbb")<<endl;\n    cout<<lengthOfLongestSubstring("bbbbb")<<endl;\n    cout<<lengthOfLongestSubstring("pwwkew")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "3\n1\n3", python: "3\n1\n3", java: "3\n1\n3", c: "3\n1\n3", cpp: "3\n1\n3" },
    hiddenTests: {
      javascript: { code: `console.log(lengthOfLongestSubstring(""));console.log(lengthOfLongestSubstring("au"));`, expected: "0\n2" },
      python: { code: `print(lengthOfLongestSubstring(""))\nprint(lengthOfLongestSubstring("au"))`, expected: "0\n2" },
      java: { code: `System.out.println(lengthOfLongestSubstring(""));System.out.println(lengthOfLongestSubstring("au"));`, expected: "0\n2" },
      c: { code: `printf("%d\\n",lengthOfLongestSubstring(""));printf("%d\\n",lengthOfLongestSubstring("au"));`, expected: "0\n2" },
      cpp: { code: `cout<<lengthOfLongestSubstring("")<<endl;cout<<lengthOfLongestSubstring("au")<<endl;`, expected: "0\n2" },
    },
  },

  "integer-to-roman": {
    id: "integer-to-roman", title: "Integer to Roman", difficulty: "Medium", category: "Math • String", order: 39,
    description: { text: "Convert an integer to a Roman numeral.", notes: [] },
    examples: [
      { input: "num = 3749", output: '"MMMDCCXLIX"' },
      { input: "num = 58", output: '"LVIII"' },
    ],
    constraints: ["1 ≤ num ≤ 3999"],
    starterCode: {
      javascript: `function intToRoman(num) {\n  // Write your solution here\n}\n\nconsole.log(intToRoman(3749));\nconsole.log(intToRoman(58));\nconsole.log(intToRoman(1994));`,
      python: `def intToRoman(num):\n    # Write your solution here\n    pass\n\nprint(intToRoman(3749))\nprint(intToRoman(58))\nprint(intToRoman(1994))`,
      java: `class Solution {\n    public static String intToRoman(int num) {\n        // Write your solution here\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(intToRoman(3749));\n        System.out.println(intToRoman(58));\n        System.out.println(intToRoman(1994));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nchar* intToRoman(int num) {\n    static char result[20];\n    result[0]='\\0';\n    // Write your solution here\n    return result;\n}\n\nint main() {\n    printf("%s\\n", intToRoman(3749));\n    printf("%s\\n", intToRoman(58));\n    printf("%s\\n", intToRoman(1994));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nstring intToRoman(int num) {\n    // Write your solution here\n    return "";\n}\n\nint main() {\n    cout<<intToRoman(3749)<<endl;\n    cout<<intToRoman(58)<<endl;\n    cout<<intToRoman(1994)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "MMMDCCXLIX\nLVIII\nMCMXCIV", python: "MMMDCCXLIX\nLVIII\nMCMXCIV", java: "MMMDCCXLIX\nLVIII\nMCMXCIV", c: "MMMDCCXLIX\nLVIII\nMCMXCIV", cpp: "MMMDCCXLIX\nLVIII\nMCMXCIV" },
    hiddenTests: {
      javascript: { code: `console.log(intToRoman(9));`, expected: "IX" },
      python: { code: `print(intToRoman(9))`, expected: "IX" },
      java: { code: `System.out.println(intToRoman(9));`, expected: "IX" },
      c: { code: `printf("%s\\n",intToRoman(9));`, expected: "IX" },
      cpp: { code: `cout<<intToRoman(9)<<endl;`, expected: "IX" },
    },
  },

  "generate-parentheses": {
    id: "generate-parentheses", title: "Generate Parentheses", difficulty: "Medium", category: "String • Backtracking", order: 40,
    description: { text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.", notes: [] },
    examples: [
      { input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: "n = 1", output: '["()"]' },
    ],
    constraints: ["1 ≤ n ≤ 8"],
    starterCode: {
      javascript: `function generateParenthesis(n) {\n  // Write your solution here\n}\n\nconsole.log(generateParenthesis(3));\nconsole.log(generateParenthesis(1));`,
      python: `def generateParenthesis(n):\n    # Write your solution here\n    pass\n\nprint(generateParenthesis(3))\nprint(generateParenthesis(1))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<String> generateParenthesis(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(generateParenthesis(3));\n        System.out.println(generateParenthesis(1));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid generate(char* current, int open, int close, int n, int pos) {\n    // Write your solution here\n}\n\nvoid generateParenthesis(int n) {\n    char* current = malloc(2*n+1);\n    current[2*n] = '\\0';\n    generate(current, 0, 0, n, 0);\n    free(current);\n}\n\nint main() {\n    generateParenthesis(3);\n    printf("---\\n");\n    generateParenthesis(1);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> generateParenthesis(int n) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    auto r1=generateParenthesis(3);\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<r1[i];}cout<<"]"<<endl;\n    auto r2=generateParenthesis(1);\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<r2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[\n  '((()))', '(()())',\n  '(())()', '()(())',\n  '()()()'\n]\n[ '()' ]", python: "['((()))', '(()())', '(())()', '()(())', '()()()']\n['()']", java: "[((())), (()()), (())(), ()(()), ()()()]\n[()]", c: "", cpp: "[((())),(()(())),(())(),()(()),()()()] \n[()]" },
    hiddenTests: {
      javascript: { code: `console.log(generateParenthesis(2).length);`, expected: "2" },
      python: { code: `print(len(generateParenthesis(2)))`, expected: "2" },
      java: { code: `System.out.println(generateParenthesis(2).size());`, expected: "2" },
      c: { code: ``, expected: "" },
      cpp: { code: `cout<<generateParenthesis(2).size()<<endl;`, expected: "2" },
    },
  },

  "search-rotated-sorted": {
    id: "search-rotated-sorted", title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Array • Binary Search", order: 41,
    description: { text: "Given a rotated sorted array and a target, return the index of the target, or -1 if not found. Must be O(log n).", notes: [] },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "All values are unique"],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\n\nconsole.log(search([4,5,6,7,0,1,2], 0));\nconsole.log(search([4,5,6,7,0,1,2], 3));\nconsole.log(search([1], 0));`,
      python: `def search(nums, target):\n    # Write your solution here\n    pass\n\nprint(search([4,5,6,7,0,1,2], 0))\nprint(search([4,5,6,7,0,1,2], 3))\nprint(search([1], 0))`,
      java: `class Solution {\n    public static int search(int[] nums, int target) {\n        // Write your solution here\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));\n        System.out.println(search(new int[]{1}, 0));\n    }\n}`,
      c: `#include <stdio.h>\n\nint search(int* nums, int numsSize, int target) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    int n[]={4,5,6,7,0,1,2};\n    printf("%d\\n", search(n,7,0));\n    printf("%d\\n", search(n,7,3));\n    int n2[]={1};\n    printf("%d\\n", search(n2,1,0));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint search(vector<int>& nums, int target) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    vector<int> n={4,5,6,7,0,1,2}; cout<<search(n,0)<<endl; cout<<search(n,3)<<endl;\n    vector<int> n2={1}; cout<<search(n2,0)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "4\n-1\n-1", python: "4\n-1\n-1", java: "4\n-1\n-1", c: "4\n-1\n-1", cpp: "4\n-1\n-1" },
    hiddenTests: {
      javascript: { code: `console.log(search([1],1));`, expected: "0" },
      python: { code: `print(search([1],1))`, expected: "0" },
      java: { code: `System.out.println(search(new int[]{1},1));`, expected: "0" },
      c: { code: `int x[]={1};printf("%d\\n",search(x,1,1));`, expected: "0" },
      cpp: { code: `vector<int> x={1};cout<<search(x,1)<<endl;`, expected: "0" },
    },
  },

  "combination-sum": {
    id: "combination-sum", title: "Combination Sum", difficulty: "Medium", category: "Array • Backtracking", order: 42,
    description: { text: "Given an array of distinct integers candidates and a target, return all unique combinations that sum to target. Same number can be used unlimited times.", notes: [] },
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your solution here\n}\n\nconsole.log(JSON.stringify(combinationSum([2,3,6,7], 7)));\nconsole.log(JSON.stringify(combinationSum([2,3,5], 8)));`,
      python: `def combinationSum(candidates, target):\n    # Write your solution here\n    pass\n\nprint(combinationSum([2,3,6,7], 7))\nprint(combinationSum([2,3,5], 8))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));\n        System.out.println(combinationSum(new int[]{2,3,5}, 8));\n    }\n}`,
      c: `#include <stdio.h>\n\nvoid combinationSum(int* candidates, int size, int target) {\n    // Write your solution here\n    printf("Implement in C\\n");\n}\n\nint main() {\n    int c1[]={2,3,6,7}; combinationSum(c1,4,7);\n    int c2[]={2,3,5}; combinationSum(c2,3,8);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> c1={2,3,6,7};\n    auto r1=combinationSum(c1,7);\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<r1[i].size();j++){if(j)cout<<",";cout<<r1[i][j];}cout<<"]";}cout<<"]"<<endl;\n    vector<int> c2={2,3,5};\n    auto r2=combinationSum(c2,8);\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<r2[i].size();j++){if(j)cout<<",";cout<<r2[i][j];}cout<<"]";}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]", python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]", java: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]", c: "", cpp: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]" },
    hiddenTests: {
      javascript: { code: `console.log(JSON.stringify(combinationSum([2],1)));`, expected: "[]" },
      python: { code: `print(combinationSum([2],1))`, expected: "[]" },
      java: { code: `System.out.println(combinationSum(new int[]{2},1));`, expected: "[]" },
      c: { code: ``, expected: "" },
      cpp: { code: `vector<int> x={2};auto r=combinationSum(x,1);cout<<"[";for(int i=0;i<r.size();i++){}cout<<"]"<<endl;`, expected: "[]" },
    },
  },

  "jump-game": {
    id: "jump-game", title: "Jump Game", difficulty: "Medium", category: "Array • Greedy", order: 43,
    description: { text: "Given an array where each element represents max jump length, determine if you can reach the last index starting from first.", notes: [] },
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true" },
      { input: "nums = [3,2,1,0,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function canJump(nums) {\n  // Write your solution here\n}\n\nconsole.log(canJump([2,3,1,1,4]));\nconsole.log(canJump([3,2,1,0,4]));`,
      python: `def canJump(nums):\n    # Write your solution here\n    pass\n\nprint(canJump([2,3,1,1,4]))\nprint(canJump([3,2,1,0,4]))`,
      java: `class Solution {\n    public static boolean canJump(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(canJump(new int[]{2,3,1,1,4}));\n        System.out.println(canJump(new int[]{3,2,1,0,4}));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n\nbool canJump(int* nums, int numsSize) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    int n1[]={2,3,1,1,4}; printf("%s\\n",canJump(n1,5)?"true":"false");\n    int n2[]={3,2,1,0,4}; printf("%s\\n",canJump(n2,5)?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canJump(vector<int>& nums) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    vector<int> n1={2,3,1,1,4}; cout<<(canJump(n1)?"true":"false")<<endl;\n    vector<int> n2={3,2,1,0,4}; cout<<(canJump(n2)?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse", c: "true\nfalse", cpp: "true\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(canJump([0]));console.log(canJump([1,2,3]));`, expected: "true\ntrue" },
      python: { code: `print(canJump([0]))\nprint(canJump([1,2,3]))`, expected: "True\nTrue" },
      java: { code: `System.out.println(canJump(new int[]{0}));System.out.println(canJump(new int[]{1,2,3}));`, expected: "true\ntrue" },
      c: { code: `int a[]={0};printf("%s\\n",canJump(a,1)?"true":"false");int b[]={1,2,3};printf("%s\\n",canJump(b,3)?"true":"false");`, expected: "true\ntrue" },
      cpp: { code: `vector<int> a={0};cout<<(canJump(a)?"true":"false")<<endl;vector<int> b={1,2,3};cout<<(canJump(b)?"true":"false")<<endl;`, expected: "true\ntrue" },
    },
  },

  "rotate-image": {
    id: "rotate-image", title: "Rotate Image", difficulty: "Medium", category: "Array • Matrix", order: 44,
    description: { text: "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.", notes: [] },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20"],
    starterCode: {
      javascript: `function rotate(matrix) {\n  // Write your solution here\n}\n\nlet m = [[1,2,3],[4,5,6],[7,8,9]];\nrotate(m);\nconsole.log(JSON.stringify(m));`,
      python: `def rotate(matrix):\n    # Write your solution here\n    pass\n\nm = [[1,2,3],[4,5,6],[7,8,9]]\nrotate(m)\nprint(m)`,
      java: `import java.util.*;\n\nclass Solution {\n    public static void rotate(int[][] matrix) {\n        // Write your solution here\n    }\n    public static void main(String[] args) {\n        int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\n        rotate(m);\n        System.out.println(Arrays.deepToString(m));\n    }\n}`,
      c: `#include <stdio.h>\n\nvoid rotate(int** matrix, int n) {\n    // Write your solution here\n}\n\nint main() {\n    int r0[]={1,2,3},r1[]={4,5,6},r2[]={7,8,9};\n    int* m[]={r0,r1,r2};\n    rotate(m,3);\n    for(int i=0;i<3;i++){printf("[");for(int j=0;j<3;j++){if(j)printf(",");printf("%d",m[i][j]);}printf("]\\n");}\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid rotate(vector<vector<int>>& matrix) {\n    // Write your solution here\n}\n\nint main() {\n    vector<vector<int>> m={{1,2,3},{4,5,6},{7,8,9}};\n    rotate(m);\n    cout<<"[";for(int i=0;i<m.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<m[i].size();j++){if(j)cout<<",";cout<<m[i][j];}cout<<"]";}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[[7,4,1],[8,5,2],[9,6,3]]", python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", c: "[7,4,1]\n[8,5,2]\n[9,6,3]", cpp: "[[7,4,1],[8,5,2],[9,6,3]]" },
    hiddenTests: {
      javascript: { code: `let m2=[[1,2],[3,4]];rotate(m2);console.log(JSON.stringify(m2));`, expected: "[[3,1],[4,2]]" },
      python: { code: `m2=[[1,2],[3,4]]\nrotate(m2)\nprint(m2)`, expected: "[[3, 1], [4, 2]]" },
      java: { code: `int[][] m2={{1,2},{3,4}};rotate(m2);System.out.println(Arrays.deepToString(m2));`, expected: "[[3, 1], [4, 2]]" },
      c: { code: ``, expected: "" },
      cpp: { code: `vector<vector<int>> m2={{1,2},{3,4}};rotate(m2);cout<<"[";for(int i=0;i<m2.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<m2[i].size();j++){if(j)cout<<",";cout<<m2[i][j];}cout<<"]";}cout<<"]"<<endl;`, expected: "[[3,1],[4,2]]" },
    },
  },

  "group-anagrams": {
    id: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", category: "String • Hash Table • Sorting", order: 45,
    description: { text: "Given an array of strings strs, group the anagrams together.", notes: [] },
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {\n  // Write your solution here\n}\n\nconsole.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));`,
      python: `def groupAnagrams(strs):\n    # Write your solution here\n    pass\n\nresult = groupAnagrams(["eat","tea","tan","ate","nat","bat"])\nprint(sorted([sorted(g) for g in result]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<List<String>> groupAnagrams(String[] strs) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint main() {\n    // Group anagrams - implement in C\n    printf("Implement groupAnagrams\\n");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<string>> groupAnagrams(vector<string>& strs) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<string> s={"eat","tea","tan","ate","nat","bat"};\n    auto r=groupAnagrams(s);\n    cout<<r.size()<<" groups"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: '[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]', python: "[['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]", java: "[[eat, tea, ate], [tan, nat], [bat]]", c: "Implement groupAnagrams", cpp: "3 groups" },
    hiddenTests: {
      javascript: { code: `console.log(groupAnagrams([""]).length);`, expected: "1" },
      python: { code: `print(len(groupAnagrams([""])))`, expected: "1" },
      java: { code: `System.out.println(groupAnagrams(new String[]{""}).size());`, expected: "1" },
      c: { code: ``, expected: "" },
      cpp: { code: `vector<string> x={""};cout<<groupAnagrams(x).size()<<endl;`, expected: "1" },
    },
  },

  "pow-x-n": {
    id: "pow-x-n", title: "Pow(x, n)", difficulty: "Medium", category: "Math • Recursion", order: 46,
    description: { text: "Implement pow(x, n), which calculates x raised to the power n.", notes: [] },
    examples: [
      { input: "x = 2.0, n = 10", output: "1024.00000" },
      { input: "x = 2.1, n = 3", output: "9.26100" },
    ],
    constraints: ["-100.0 < x < 100.0", "-2³¹ ≤ n ≤ 2³¹-1"],
    starterCode: {
      javascript: `function myPow(x, n) {\n  // Write your solution here\n}\n\nconsole.log(myPow(2.0, 10));\nconsole.log(myPow(2.0, -2));`,
      python: `def myPow(x, n):\n    # Write your solution here\n    pass\n\nprint(myPow(2.0, 10))\nprint(myPow(2.0, -2))`,
      java: `class Solution {\n    public static double myPow(double x, int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(myPow(2.0, 10));\n        System.out.println(myPow(2.0, -2));\n    }\n}`,
      c: `#include <stdio.h>\n\ndouble myPow(double x, int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%.5f\\n", myPow(2.0, 10));\n    printf("%.5f\\n", myPow(2.0, -2));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\ndouble myPow(double x, int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<fixed<<setprecision(5)<<myPow(2.0,10)<<endl;\n    cout<<fixed<<setprecision(5)<<myPow(2.0,-2)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "1024\n0.25", python: "1024.0\n0.25", java: "1024.0\n0.25", c: "1024.00000\n0.25000", cpp: "1024.00000\n0.25000" },
    hiddenTests: {
      javascript: { code: `console.log(myPow(2,0));`, expected: "1" },
      python: { code: `print(myPow(2,0))`, expected: "1" },
      java: { code: `System.out.println(myPow(2,0));`, expected: "1.0" },
      c: { code: `printf("%.0f\\n",myPow(2,0));`, expected: "1" },
      cpp: { code: `cout<<fixed<<setprecision(0)<<myPow(2,0)<<endl;`, expected: "1" },
    },
  },

  "sort-colors": {
    id: "sort-colors", title: "Sort Colors", difficulty: "Medium", category: "Array • Two Pointers • Sorting", order: 47,
    description: { text: "Given an array with n objects colored red(0), white(1), blue(2), sort them in-place. One-pass algorithm.", notes: [] },
    examples: [
      { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" },
      { input: "nums = [2,0,1]", output: "[0,1,2]" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 300"],
    starterCode: {
      javascript: `function sortColors(nums) {\n  // Write your solution here\n}\n\nlet n1 = [2,0,2,1,1,0];\nsortColors(n1);\nconsole.log(n1);\nlet n2 = [2,0,1];\nsortColors(n2);\nconsole.log(n2);`,
      python: `def sortColors(nums):\n    # Write your solution here\n    pass\n\nn1 = [2,0,2,1,1,0]\nsortColors(n1)\nprint(n1)\nn2 = [2,0,1]\nsortColors(n2)\nprint(n2)`,
      java: `import java.util.*;\n\nclass Solution {\n    public static void sortColors(int[] nums) {\n        // Write your solution here\n    }\n    public static void main(String[] args) {\n        int[] n1 = {2,0,2,1,1,0};\n        sortColors(n1);\n        System.out.println(Arrays.toString(n1));\n        int[] n2 = {2,0,1};\n        sortColors(n2);\n        System.out.println(Arrays.toString(n2));\n    }\n}`,
      c: `#include <stdio.h>\n\nvoid sortColors(int* nums, int numsSize) {\n    // Write your solution here\n}\n\nint main() {\n    int n1[]={2,0,2,1,1,0};\n    sortColors(n1,6);\n    printf("[");for(int i=0;i<6;i++){if(i)printf(",");printf("%d",n1[i]);}printf("]\\n");\n    int n2[]={2,0,1};\n    sortColors(n2,3);\n    printf("[");for(int i=0;i<3;i++){if(i)printf(",");printf("%d",n2[i]);}printf("]\\n");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid sortColors(vector<int>& nums) {\n    // Write your solution here\n}\n\nint main() {\n    vector<int> n1={2,0,2,1,1,0};\n    sortColors(n1);\n    cout<<"[";for(int i=0;i<n1.size();i++){if(i)cout<<",";cout<<n1[i];}cout<<"]"<<endl;\n    vector<int> n2={2,0,1};\n    sortColors(n2);\n    cout<<"[";for(int i=0;i<n2.size();i++){if(i)cout<<",";cout<<n2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[\n  0, 0, 1,\n  1, 2, 2\n]\n[ 0, 1, 2 ]", python: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]", java: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]", c: "[0,0,1,1,2,2]\n[0,1,2]", cpp: "[0,0,1,1,2,2]\n[0,1,2]" },
    hiddenTests: {
      javascript: { code: `let h=[1];sortColors(h);console.log(h);`, expected: "[ 1 ]" },
      python: { code: `h=[1]\nsortColors(h)\nprint(h)`, expected: "[1]" },
      java: { code: `int[] h={1};sortColors(h);System.out.println(Arrays.toString(h));`, expected: "[1]" },
      c: { code: `int h[]={1};sortColors(h,1);printf("[%d]\\n",h[0]);`, expected: "[1]" },
      cpp: { code: `vector<int> h={1};sortColors(h);cout<<"["<<h[0]<<"]"<<endl;`, expected: "[1]" },
    },
  },

  "subsets": {
    id: "subsets", title: "Subsets", difficulty: "Medium", category: "Array • Backtracking", order: 48,
    description: { text: "Given an integer array nums of unique elements, return all possible subsets. The solution must not contain duplicate subsets.", notes: [] },
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { input: "nums = [0]", output: "[[],[0]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "All elements are unique"],
    starterCode: {
      javascript: `function subsets(nums) {\n  // Write your solution here\n}\n\nconsole.log(JSON.stringify(subsets([1,2,3])));\nconsole.log(JSON.stringify(subsets([0])));`,
      python: `def subsets(nums):\n    # Write your solution here\n    pass\n\nprint(subsets([1,2,3]))\nprint(subsets([0]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<List<Integer>> subsets(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(subsets(new int[]{1,2,3}));\n        System.out.println(subsets(new int[]{0}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint main() {\n    // Subsets problem - print subsets of [1,2,3]\n    printf("Implement subsets\\n");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> subsets(vector<int>& nums) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> n={1,2,3};\n    auto r=subsets(n);\n    cout<<r.size()<<" subsets"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]", python: "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]", java: "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]", c: "Implement subsets", cpp: "8 subsets" },
    hiddenTests: {
      javascript: { code: `console.log(subsets([1,2,3]).length);`, expected: "8" },
      python: { code: `print(len(subsets([1,2,3])))`, expected: "8" },
      java: { code: `System.out.println(subsets(new int[]{1,2,3}).size());`, expected: "8" },
      c: { code: ``, expected: "" },
      cpp: { code: `vector<int> x={1,2,3};cout<<subsets(x).size()<<endl;`, expected: "8" },
    },
  },

  "house-robber": {
    id: "house-robber", title: "House Robber", difficulty: "Medium", category: "Array • Dynamic Programming", order: 49,
    description: { text: "Given an array representing money at each house, return max money you can rob without robbing two adjacent houses.", notes: [] },
    examples: [
      { input: "nums = [1,2,3,1]", output: "4" },
      { input: "nums = [2,7,9,3,1]", output: "12" },
    ],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: {
      javascript: `function rob(nums) {\n  // Write your solution here\n}\n\nconsole.log(rob([1,2,3,1]));\nconsole.log(rob([2,7,9,3,1]));`,
      python: `def rob(nums):\n    # Write your solution here\n    pass\n\nprint(rob([1,2,3,1]))\nprint(rob([2,7,9,3,1]))`,
      java: `class Solution {\n    public static int rob(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(rob(new int[]{1,2,3,1}));\n        System.out.println(rob(new int[]{2,7,9,3,1}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint rob(int* nums, int numsSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[]={1,2,3,1}; printf("%d\\n", rob(n1,4));\n    int n2[]={2,7,9,3,1}; printf("%d\\n", rob(n2,5));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint rob(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={1,2,3,1}; cout<<rob(n1)<<endl;\n    vector<int> n2={2,7,9,3,1}; cout<<rob(n2)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "4\n12", python: "4\n12", java: "4\n12", c: "4\n12", cpp: "4\n12" },
    hiddenTests: {
      javascript: { code: `console.log(rob([2,1,1,2]));`, expected: "4" },
      python: { code: `print(rob([2,1,1,2]))`, expected: "4" },
      java: { code: `System.out.println(rob(new int[]{2,1,1,2}));`, expected: "4" },
      c: { code: `int h[]={2,1,1,2};printf("%d\\n",rob(h,4));`, expected: "4" },
      cpp: { code: `vector<int> h={2,1,1,2};cout<<rob(h)<<endl;`, expected: "4" },
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence", title: "Longest Increasing Subsequence", difficulty: "Medium", category: "Array • DP • Binary Search", order: 50,
    description: { text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.", notes: [] },
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "LIS is [2,3,7,101]" },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your solution here\n}\n\nconsole.log(lengthOfLIS([10,9,2,5,3,7,101,18]));\nconsole.log(lengthOfLIS([0,1,0,3,2,3]));\nconsole.log(lengthOfLIS([7,7,7,7,7]));`,
      python: `def lengthOfLIS(nums):\n    # Write your solution here\n    pass\n\nprint(lengthOfLIS([10,9,2,5,3,7,101,18]))\nprint(lengthOfLIS([0,1,0,3,2,3]))\nprint(lengthOfLIS([7,7,7,7,7]))`,
      java: `class Solution {\n    public static int lengthOfLIS(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18}));\n        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3}));\n        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint lengthOfLIS(int* nums, int numsSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[]={10,9,2,5,3,7,101,18}; printf("%d\\n", lengthOfLIS(n1,8));\n    int n2[]={0,1,0,3,2,3}; printf("%d\\n", lengthOfLIS(n2,6));\n    int n3[]={7,7,7,7,7}; printf("%d\\n", lengthOfLIS(n3,5));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lengthOfLIS(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={10,9,2,5,3,7,101,18}; cout<<lengthOfLIS(n1)<<endl;\n    vector<int> n2={0,1,0,3,2,3}; cout<<lengthOfLIS(n2)<<endl;\n    vector<int> n3={7,7,7,7,7}; cout<<lengthOfLIS(n3)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "4\n4\n1", python: "4\n4\n1", java: "4\n4\n1", c: "4\n4\n1", cpp: "4\n4\n1" },
    hiddenTests: {
      javascript: { code: `console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));`, expected: "6" },
      python: { code: `print(lengthOfLIS([1,3,6,7,9,4,10,5,6]))`, expected: "6" },
      java: { code: `System.out.println(lengthOfLIS(new int[]{1,3,6,7,9,4,10,5,6}));`, expected: "6" },
      c: { code: `int h[]={1,3,6,7,9,4,10,5,6};printf("%d\\n",lengthOfLIS(h,9));`, expected: "6" },
      cpp: { code: `vector<int> h={1,3,6,7,9,4,10,5,6};cout<<lengthOfLIS(h)<<endl;`, expected: "6" },
    },
  },

  "coin-change": {
    id: "coin-change", title: "Coin Change", difficulty: "Medium", category: "Array • Dynamic Programming", order: 51,
    description: { text: "Given coins of different denominations and a total amount, return the fewest number of coins needed. Return -1 if not possible.", notes: [] },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}\n\nconsole.log(coinChange([1,2,5], 11));\nconsole.log(coinChange([2], 3));\nconsole.log(coinChange([1], 0));`,
      python: `def coinChange(coins, amount):\n    # Write your solution here\n    pass\n\nprint(coinChange([1,2,5], 11))\nprint(coinChange([2], 3))\nprint(coinChange([1], 0))`,
      java: `class Solution {\n    public static int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(coinChange(new int[]{1,2,5}, 11));\n        System.out.println(coinChange(new int[]{2}, 3));\n        System.out.println(coinChange(new int[]{1}, 0));\n    }\n}`,
      c: `#include <stdio.h>\n#include <limits.h>\n\nint coinChange(int* coins, int coinsSize, int amount) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    int c1[]={1,2,5}; printf("%d\\n", coinChange(c1,3,11));\n    int c2[]={2}; printf("%d\\n", coinChange(c2,1,3));\n    int c3[]={1}; printf("%d\\n", coinChange(c3,1,0));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint coinChange(vector<int>& coins, int amount) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    vector<int> c1={1,2,5}; cout<<coinChange(c1,11)<<endl;\n    vector<int> c2={2}; cout<<coinChange(c2,3)<<endl;\n    vector<int> c3={1}; cout<<coinChange(c3,0)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "3\n-1\n0", python: "3\n-1\n0", java: "3\n-1\n0", c: "3\n-1\n0", cpp: "3\n-1\n0" },
    hiddenTests: {
      javascript: { code: `console.log(coinChange([1,2,5],100));`, expected: "20" },
      python: { code: `print(coinChange([1,2,5],100))`, expected: "20" },
      java: { code: `System.out.println(coinChange(new int[]{1,2,5},100));`, expected: "20" },
      c: { code: `int h[]={1,2,5};printf("%d\\n",coinChange(h,3,100));`, expected: "20" },
      cpp: { code: `vector<int> h={1,2,5};cout<<coinChange(h,100)<<endl;`, expected: "20" },
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", category: "Array • Prefix Sum", order: 52,
    description: { text: "Given integer array nums, return array answer where answer[i] is product of all elements except nums[i]. Must be O(n) without using division.", notes: [] },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}\n\nconsole.log(productExceptSelf([1,2,3,4]));\nconsole.log(productExceptSelf([-1,1,0,-3,3]));`,
      python: `def productExceptSelf(nums):\n    # Write your solution here\n    pass\n\nprint(productExceptSelf([1,2,3,4]))\nprint(productExceptSelf([-1,1,0,-3,3]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int[] productExceptSelf(int[] nums) {\n        // Write your solution here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));\n        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nint* productExceptSelf(int* nums, int numsSize, int* returnSize) {\n    // Write your solution here\n    *returnSize = numsSize;\n    int* result = malloc(numsSize*sizeof(int));\n    return result;\n}\n\nint main() {\n    int rs;\n    int n1[]={1,2,3,4};\n    int*r1=productExceptSelf(n1,4,&rs);\n    printf("[");for(int i=0;i<rs;i++){if(i)printf(",");printf("%d",r1[i]);}printf("]\\n");\n    free(r1);\n    int n2[]={-1,1,0,-3,3};\n    int*r2=productExceptSelf(n2,5,&rs);\n    printf("[");for(int i=0;i<rs;i++){if(i)printf(",");printf("%d",r2[i]);}printf("]\\n");\n    free(r2);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> productExceptSelf(vector<int>& nums) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> n1={1,2,3,4};\n    auto r1=productExceptSelf(n1);\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<r1[i];}cout<<"]"<<endl;\n    vector<int> n2={-1,1,0,-3,3};\n    auto r2=productExceptSelf(n2);\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<r2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[ 24, 12, 8, 6 ]\n[ 0, 0, 9, 0, 0 ]", python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]", java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]", c: "[24,12,8,6]\n[0,0,9,0,0]", cpp: "[24,12,8,6]\n[0,0,9,0,0]" },
    hiddenTests: {
      javascript: { code: `console.log(productExceptSelf([2,3]));`, expected: "[ 3, 2 ]" },
      python: { code: `print(productExceptSelf([2,3]))`, expected: "[3, 2]" },
      java: { code: `System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3})));`, expected: "[3, 2]" },
      c: { code: `int h[]={2,3};int*r=productExceptSelf(h,2,&rs);printf("[%d,%d]\\n",r[0],r[1]);free(r);`, expected: "[3,2]" },
      cpp: { code: `vector<int> h={2,3};auto r=productExceptSelf(h);cout<<"["<<r[0]<<","<<r[1]<<"]"<<endl;`, expected: "[3,2]" },
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", category: "Array • Stack", order: 53,
    description: { text: "Given array of daily temperatures, return array where answer[i] is number of days until a warmer temperature. If no future warmer day, answer[i] = 0.", notes: [] },
    examples: [
      { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
      { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" },
    ],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {\n  // Write your solution here\n}\n\nconsole.log(dailyTemperatures([73,74,75,71,69,72,76,73]));\nconsole.log(dailyTemperatures([30,40,50,60]));`,
      python: `def dailyTemperatures(temperatures):\n    # Write your solution here\n    pass\n\nprint(dailyTemperatures([73,74,75,71,69,72,76,73]))\nprint(dailyTemperatures([30,40,50,60]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int[] dailyTemperatures(int[] temperatures) {\n        // Write your solution here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})));\n        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60})));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nint* dailyTemperatures(int* temp, int tempSize, int* returnSize) {\n    *returnSize = tempSize;\n    int* result = calloc(tempSize, sizeof(int));\n    // Write your solution here\n    return result;\n}\n\nint main() {\n    int rs;\n    int t1[]={73,74,75,71,69,72,76,73};\n    int*r1=dailyTemperatures(t1,8,&rs);\n    printf("[");for(int i=0;i<rs;i++){if(i)printf(",");printf("%d",r1[i]);}printf("]\\n");\n    free(r1);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nvector<int> dailyTemperatures(vector<int>& temperatures) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> t1={73,74,75,71,69,72,76,73};\n    auto r1=dailyTemperatures(t1);\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<r1[i];}cout<<"]"<<endl;\n    vector<int> t2={30,40,50,60};\n    auto r2=dailyTemperatures(t2);\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<r2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[\n  1, 1, 4, 2,\n  1, 1, 0, 0\n]\n[ 1, 1, 1, 0 ]", python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]", java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]", c: "[1,1,4,2,1,1,0,0]", cpp: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]" },
    hiddenTests: {
      javascript: { code: `console.log(dailyTemperatures([30,30,30]));`, expected: "[ 0, 0, 0 ]" },
      python: { code: `print(dailyTemperatures([30,30,30]))`, expected: "[0, 0, 0]" },
      java: { code: `System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,30,30})));`, expected: "[0, 0, 0]" },
      c: { code: `int h[]={30,30,30};int*r=dailyTemperatures(h,3,&rs);printf("[%d,%d,%d]\\n",r[0],r[1],r[2]);free(r);`, expected: "[0,0,0]" },
      cpp: { code: `vector<int> h={30,30,30};auto r=dailyTemperatures(h);cout<<"["<<r[0]<<","<<r[1]<<","<<r[2]<<"]"<<endl;`, expected: "[0,0,0]" },
    },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k", title: "Subarray Sum Equals K", difficulty: "Medium", category: "Array • Hash Table • Prefix Sum", order: 54,
    description: { text: "Given an integer array nums and an integer k, return the total number of subarrays whose sum equals to k.", notes: [] },
    examples: [
      { input: "nums = [1,1,1], k = 2", output: "2" },
      { input: "nums = [1,2,3], k = 3", output: "2" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {\n  // Write your solution here\n}\n\nconsole.log(subarraySum([1,1,1], 2));\nconsole.log(subarraySum([1,2,3], 3));`,
      python: `def subarraySum(nums, k):\n    # Write your solution here\n    pass\n\nprint(subarraySum([1,1,1], 2))\nprint(subarraySum([1,2,3], 3))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int subarraySum(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(subarraySum(new int[]{1,1,1}, 2));\n        System.out.println(subarraySum(new int[]{1,2,3}, 3));\n    }\n}`,
      c: `#include <stdio.h>\n\nint subarraySum(int* nums, int numsSize, int k) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[]={1,1,1}; printf("%d\\n", subarraySum(n1,3,2));\n    int n2[]={1,2,3}; printf("%d\\n", subarraySum(n2,3,3));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint subarraySum(vector<int>& nums, int k) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={1,1,1}; cout<<subarraySum(n1,2)<<endl;\n    vector<int> n2={1,2,3}; cout<<subarraySum(n2,3)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "2\n2", python: "2\n2", java: "2\n2", c: "2\n2", cpp: "2\n2" },
    hiddenTests: {
      javascript: { code: `console.log(subarraySum([1,-1,0],0));`, expected: "3" },
      python: { code: `print(subarraySum([1,-1,0],0))`, expected: "3" },
      java: { code: `System.out.println(subarraySum(new int[]{1,-1,0},0));`, expected: "3" },
      c: { code: `int h[]={1,-1,0};printf("%d\\n",subarraySum(h,3,0));`, expected: "3" },
      cpp: { code: `vector<int> h={1,-1,0};cout<<subarraySum(h,0)<<endl;`, expected: "3" },
    },
  },

  "unique-paths": {
    id: "unique-paths", title: "Unique Paths", difficulty: "Medium", category: "Math • DP", order: 55,
    description: { text: "A robot is in the top-left corner of a m x n grid. It can only move right or down. How many unique paths to bottom-right corner?", notes: [] },
    examples: [
      { input: "m = 3, n = 7", output: "28" },
      { input: "m = 3, n = 2", output: "3" },
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {\n  // Write your solution here\n}\n\nconsole.log(uniquePaths(3, 7));\nconsole.log(uniquePaths(3, 2));`,
      python: `def uniquePaths(m, n):\n    # Write your solution here\n    pass\n\nprint(uniquePaths(3, 7))\nprint(uniquePaths(3, 2))`,
      java: `class Solution {\n    public static int uniquePaths(int m, int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(uniquePaths(3, 7));\n        System.out.println(uniquePaths(3, 2));\n    }\n}`,
      c: `#include <stdio.h>\n\nint uniquePaths(int m, int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", uniquePaths(3,7));\n    printf("%d\\n", uniquePaths(3,2));\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint uniquePaths(int m, int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<uniquePaths(3,7)<<endl;\n    cout<<uniquePaths(3,2)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "28\n3", python: "28\n3", java: "28\n3", c: "28\n3", cpp: "28\n3" },
    hiddenTests: {
      javascript: { code: `console.log(uniquePaths(1,1));console.log(uniquePaths(2,2));`, expected: "1\n2" },
      python: { code: `print(uniquePaths(1,1))\nprint(uniquePaths(2,2))`, expected: "1\n2" },
      java: { code: `System.out.println(uniquePaths(1,1));System.out.println(uniquePaths(2,2));`, expected: "1\n2" },
      c: { code: `printf("%d\\n",uniquePaths(1,1));printf("%d\\n",uniquePaths(2,2));`, expected: "1\n2" },
      cpp: { code: `cout<<uniquePaths(1,1)<<endl;cout<<uniquePaths(2,2)<<endl;`, expected: "1\n2" },
    },
  },
};
