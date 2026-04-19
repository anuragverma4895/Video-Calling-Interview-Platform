export const EASY_PROBLEMS_3 = {
  "isomorphic-strings": {
    id: "isomorphic-strings", title: "Isomorphic Strings", difficulty: "Easy", category: "String • Hash Table", order: 26,
    description: { text: "Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if characters in s can be replaced to get t (preserving order).", notes: [] },
    examples: [
      { input: 's = "egg", t = "add"', output: "true" },
      { input: 's = "foo", t = "bar"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 5 * 10⁴", "s.length == t.length"],
    starterCode: {
      javascript: `function isIsomorphic(s, t) {\n  // Write your solution here\n}\n\nconsole.log(isIsomorphic("egg", "add"));\nconsole.log(isIsomorphic("foo", "bar"));\nconsole.log(isIsomorphic("paper", "title"));`,
      python: `def isIsomorphic(s, t):\n    # Write your solution here\n    pass\n\nprint(isIsomorphic("egg", "add"))\nprint(isIsomorphic("foo", "bar"))\nprint(isIsomorphic("paper", "title"))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static boolean isIsomorphic(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isIsomorphic("egg", "add"));\n        System.out.println(isIsomorphic("foo", "bar"));\n        System.out.println(isIsomorphic("paper", "title"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\n\nbool isIsomorphic(char* s, char* t) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", isIsomorphic("egg","add")?"true":"false");\n    printf("%s\\n", isIsomorphic("foo","bar")?"true":"false");\n    printf("%s\\n", isIsomorphic("paper","title")?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nbool isIsomorphic(string s, string t) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout<<(isIsomorphic("egg","add")?"true":"false")<<endl;\n    cout<<(isIsomorphic("foo","bar")?"true":"false")<<endl;\n    cout<<(isIsomorphic("paper","title")?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse\ntrue", python: "True\nFalse\nTrue", java: "true\nfalse\ntrue", c: "true\nfalse\ntrue", cpp: "true\nfalse\ntrue" },
    hiddenTests: {
      javascript: { code: `console.log(isIsomorphic("badc","baba"));`, expected: "false" },
      python: { code: `print(isIsomorphic("badc","baba"))`, expected: "False" },
      java: { code: `System.out.println(isIsomorphic("badc","baba"));`, expected: "false" },
      c: { code: `printf("%s\\n",isIsomorphic("badc","baba")?"true":"false");`, expected: "false" },
      cpp: { code: `cout<<(isIsomorphic("badc","baba")?"true":"false")<<endl;`, expected: "false" },
    },
  },

  "number-of-1-bits": {
    id: "number-of-1-bits", title: "Number of 1 Bits", difficulty: "Easy", category: "Bit Manipulation", order: 27,
    description: { text: "Write a function that takes the unsigned integer and returns the number of '1' bits it has (Hamming weight).", notes: [] },
    examples: [
      { input: "n = 11", output: "3", explanation: "Binary: 1011 has three 1-bits" },
      { input: "n = 128", output: "1" },
    ],
    constraints: ["Input is a 32-bit unsigned integer"],
    starterCode: {
      javascript: `function hammingWeight(n) {\n  // Write your solution here\n}\n\nconsole.log(hammingWeight(11));\nconsole.log(hammingWeight(128));\nconsole.log(hammingWeight(255));`,
      python: `def hammingWeight(n):\n    # Write your solution here\n    pass\n\nprint(hammingWeight(11))\nprint(hammingWeight(128))\nprint(hammingWeight(255))`,
      java: `class Solution {\n    public static int hammingWeight(int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(hammingWeight(11));\n        System.out.println(hammingWeight(128));\n        System.out.println(hammingWeight(255));\n    }\n}`,
      c: `#include <stdio.h>\n\nint hammingWeight(unsigned int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", hammingWeight(11));\n    printf("%d\\n", hammingWeight(128));\n    printf("%d\\n", hammingWeight(255));\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint hammingWeight(unsigned int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<hammingWeight(11)<<endl;\n    cout<<hammingWeight(128)<<endl;\n    cout<<hammingWeight(255)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "3\n1\n8", python: "3\n1\n8", java: "3\n1\n8", c: "3\n1\n8", cpp: "3\n1\n8" },
    hiddenTests: {
      javascript: { code: `console.log(hammingWeight(0));console.log(hammingWeight(7));`, expected: "0\n3" },
      python: { code: `print(hammingWeight(0))\nprint(hammingWeight(7))`, expected: "0\n3" },
      java: { code: `System.out.println(hammingWeight(0));System.out.println(hammingWeight(7));`, expected: "0\n3" },
      c: { code: `printf("%d\\n",hammingWeight(0));printf("%d\\n",hammingWeight(7));`, expected: "0\n3" },
      cpp: { code: `cout<<hammingWeight(0)<<endl;cout<<hammingWeight(7)<<endl;`, expected: "0\n3" },
    },
  },

  "excel-sheet-column-number": {
    id: "excel-sheet-column-number", title: "Excel Sheet Column Number", difficulty: "Easy", category: "Math • String", order: 28,
    description: { text: "Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.", notes: [] },
    examples: [
      { input: 'columnTitle = "A"', output: "1" },
      { input: 'columnTitle = "AB"', output: "28" },
      { input: 'columnTitle = "ZY"', output: "701" },
    ],
    constraints: ["1 ≤ columnTitle.length ≤ 7"],
    starterCode: {
      javascript: `function titleToNumber(columnTitle) {\n  // Write your solution here\n}\n\nconsole.log(titleToNumber("A"));\nconsole.log(titleToNumber("AB"));\nconsole.log(titleToNumber("ZY"));`,
      python: `def titleToNumber(columnTitle):\n    # Write your solution here\n    pass\n\nprint(titleToNumber("A"))\nprint(titleToNumber("AB"))\nprint(titleToNumber("ZY"))`,
      java: `class Solution {\n    public static int titleToNumber(String columnTitle) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(titleToNumber("A"));\n        System.out.println(titleToNumber("AB"));\n        System.out.println(titleToNumber("ZY"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nint titleToNumber(char* columnTitle) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", titleToNumber("A"));\n    printf("%d\\n", titleToNumber("AB"));\n    printf("%d\\n", titleToNumber("ZY"));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint titleToNumber(string columnTitle) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<titleToNumber("A")<<endl;\n    cout<<titleToNumber("AB")<<endl;\n    cout<<titleToNumber("ZY")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "1\n28\n701", python: "1\n28\n701", java: "1\n28\n701", c: "1\n28\n701", cpp: "1\n28\n701" },
    hiddenTests: {
      javascript: { code: `console.log(titleToNumber("Z"));`, expected: "26" },
      python: { code: `print(titleToNumber("Z"))`, expected: "26" },
      java: { code: `System.out.println(titleToNumber("Z"));`, expected: "26" },
      c: { code: `printf("%d\\n",titleToNumber("Z"));`, expected: "26" },
      cpp: { code: `cout<<titleToNumber("Z")<<endl;`, expected: "26" },
    },
  },

  "reverse-integer": {
    id: "reverse-integer", title: "Reverse Integer", difficulty: "Easy", category: "Math", order: 29,
    description: { text: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing causes overflow, return 0.", notes: [] },
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function reverse(x) {\n  // Write your solution here\n}\n\nconsole.log(reverse(123));\nconsole.log(reverse(-123));\nconsole.log(reverse(120));`,
      python: `def reverse(x):\n    # Write your solution here\n    pass\n\nprint(reverse(123))\nprint(reverse(-123))\nprint(reverse(120))`,
      java: `class Solution {\n    public static int reverse(int x) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(reverse(123));\n        System.out.println(reverse(-123));\n        System.out.println(reverse(120));\n    }\n}`,
      c: `#include <stdio.h>\n#include <limits.h>\n\nint reverse(int x) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", reverse(123));\n    printf("%d\\n", reverse(-123));\n    printf("%d\\n", reverse(120));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <climits>\nusing namespace std;\n\nint reverse(int x) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<reverse(123)<<endl;\n    cout<<reverse(-123)<<endl;\n    cout<<reverse(120)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "321\n-321\n21", python: "321\n-321\n21", java: "321\n-321\n21", c: "321\n-321\n21", cpp: "321\n-321\n21" },
    hiddenTests: {
      javascript: { code: `console.log(reverse(0));`, expected: "0" },
      python: { code: `print(reverse(0))`, expected: "0" },
      java: { code: `System.out.println(reverse(0));`, expected: "0" },
      c: { code: `printf("%d\\n",reverse(0));`, expected: "0" },
      cpp: { code: `cout<<reverse(0)<<endl;`, expected: "0" },
    },
  },

  "count-primes": {
    id: "count-primes", title: "Count Primes", difficulty: "Easy", category: "Math", order: 30,
    description: { text: "Given an integer n, return the number of prime numbers that are strictly less than n.", notes: [] },
    examples: [
      { input: "n = 10", output: "4", explanation: "Primes < 10: 2, 3, 5, 7" },
      { input: "n = 0", output: "0" },
      { input: "n = 1", output: "0" },
    ],
    constraints: ["0 ≤ n ≤ 5 * 10⁶"],
    starterCode: {
      javascript: `function countPrimes(n) {\n  // Write your solution here\n}\n\nconsole.log(countPrimes(10));\nconsole.log(countPrimes(0));\nconsole.log(countPrimes(1));`,
      python: `def countPrimes(n):\n    # Write your solution here\n    pass\n\nprint(countPrimes(10))\nprint(countPrimes(0))\nprint(countPrimes(1))`,
      java: `class Solution {\n    public static int countPrimes(int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(countPrimes(10));\n        System.out.println(countPrimes(0));\n        System.out.println(countPrimes(1));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nint countPrimes(int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", countPrimes(10));\n    printf("%d\\n", countPrimes(0));\n    printf("%d\\n", countPrimes(1));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countPrimes(int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<countPrimes(10)<<endl;\n    cout<<countPrimes(0)<<endl;\n    cout<<countPrimes(1)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "4\n0\n0", python: "4\n0\n0", java: "4\n0\n0", c: "4\n0\n0", cpp: "4\n0\n0" },
    hiddenTests: {
      javascript: { code: `console.log(countPrimes(20));`, expected: "8" },
      python: { code: `print(countPrimes(20))`, expected: "8" },
      java: { code: `System.out.println(countPrimes(20));`, expected: "8" },
      c: { code: `printf("%d\\n",countPrimes(20));`, expected: "8" },
      cpp: { code: `cout<<countPrimes(20)<<endl;`, expected: "8" },
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray", title: "Maximum Subarray", difficulty: "Easy", category: "Array • Dynamic Programming", order: 31,
    description: { text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.", notes: [] },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}\n\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log(maxSubArray([1]));\nconsole.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums):\n    # Write your solution here\n    pass\n\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))\nprint(maxSubArray([1]))\nprint(maxSubArray([5,4,-1,7,8]))`,
      java: `class Solution {\n    public static int maxSubArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));\n        System.out.println(maxSubArray(new int[]{1}));\n        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint maxSubArray(int* nums, int numsSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[]={-2,1,-3,4,-1,2,1,-5,4}; printf("%d\\n", maxSubArray(n1,9));\n    int n2[]={1}; printf("%d\\n", maxSubArray(n2,1));\n    int n3[]={5,4,-1,7,8}; printf("%d\\n", maxSubArray(n3,5));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={-2,1,-3,4,-1,2,1,-5,4}; cout<<maxSubArray(n1)<<endl;\n    vector<int> n2={1}; cout<<maxSubArray(n2)<<endl;\n    vector<int> n3={5,4,-1,7,8}; cout<<maxSubArray(n3)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "6\n1\n23", python: "6\n1\n23", java: "6\n1\n23", c: "6\n1\n23", cpp: "6\n1\n23" },
    hiddenTests: {
      javascript: { code: `console.log(maxSubArray([-1]));console.log(maxSubArray([-2,-1]));`, expected: "-1\n-1" },
      python: { code: `print(maxSubArray([-1]))\nprint(maxSubArray([-2,-1]))`, expected: "-1\n-1" },
      java: { code: `System.out.println(maxSubArray(new int[]{-1}));System.out.println(maxSubArray(new int[]{-2,-1}));`, expected: "-1\n-1" },
      c: { code: `int a[]={-1};printf("%d\\n",maxSubArray(a,1));int b[]={-2,-1};printf("%d\\n",maxSubArray(b,2));`, expected: "-1\n-1" },
      cpp: { code: `vector<int> a={-1};cout<<maxSubArray(a)<<endl;vector<int> b={-2,-1};cout<<maxSubArray(b)<<endl;`, expected: "-1\n-1" },
    },
  },

  "ransom-note": {
    id: "ransom-note", title: "Ransom Note", difficulty: "Easy", category: "String • Hash Table", order: 32,
    description: { text: "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once.", notes: [] },
    examples: [
      { input: 'ransomNote = "a", magazine = "b"', output: "false" },
      { input: 'ransomNote = "aa", magazine = "aab"', output: "true" },
    ],
    constraints: ["1 ≤ ransomNote.length, magazine.length ≤ 10⁵"],
    starterCode: {
      javascript: `function canConstruct(ransomNote, magazine) {\n  // Write your solution here\n}\n\nconsole.log(canConstruct("a", "b"));\nconsole.log(canConstruct("aa", "ab"));\nconsole.log(canConstruct("aa", "aab"));`,
      python: `def canConstruct(ransomNote, magazine):\n    # Write your solution here\n    pass\n\nprint(canConstruct("a", "b"))\nprint(canConstruct("aa", "ab"))\nprint(canConstruct("aa", "aab"))`,
      java: `class Solution {\n    public static boolean canConstruct(String ransomNote, String magazine) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(canConstruct("a", "b"));\n        System.out.println(canConstruct("aa", "ab"));\n        System.out.println(canConstruct("aa", "aab"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\n\nbool canConstruct(char* ransomNote, char* magazine) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", canConstruct("a","b")?"true":"false");\n    printf("%s\\n", canConstruct("aa","ab")?"true":"false");\n    printf("%s\\n", canConstruct("aa","aab")?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nbool canConstruct(string ransomNote, string magazine) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout<<(canConstruct("a","b")?"true":"false")<<endl;\n    cout<<(canConstruct("aa","ab")?"true":"false")<<endl;\n    cout<<(canConstruct("aa","aab")?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "false\nfalse\ntrue", python: "False\nFalse\nTrue", java: "false\nfalse\ntrue", c: "false\nfalse\ntrue", cpp: "false\nfalse\ntrue" },
    hiddenTests: {
      javascript: { code: `console.log(canConstruct("abc","ahbgdc"));`, expected: "true" },
      python: { code: `print(canConstruct("abc","ahbgdc"))`, expected: "True" },
      java: { code: `System.out.println(canConstruct("abc","ahbgdc"));`, expected: "true" },
      c: { code: `printf("%s\\n",canConstruct("abc","ahbgdc")?"true":"false");`, expected: "true" },
      cpp: { code: `cout<<(canConstruct("abc","ahbgdc")?"true":"false")<<endl;`, expected: "true" },
    },
  },

  "intersection-of-two-arrays": {
    id: "intersection-of-two-arrays", title: "Intersection of Two Arrays II", difficulty: "Easy", category: "Array • Hash Table", order: 33,
    description: { text: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element must appear as many times as it shows in both arrays.", notes: [] },
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2,2]" },
      { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" },
    ],
    constraints: ["1 ≤ nums1.length, nums2.length ≤ 1000"],
    starterCode: {
      javascript: `function intersect(nums1, nums2) {\n  // Write your solution here\n}\n\nconsole.log(intersect([1,2,2,1], [2,2]));\nconsole.log(intersect([4,9,5], [9,4,9,8,4]));`,
      python: `def intersect(nums1, nums2):\n    # Write your solution here\n    pass\n\nprint(sorted(intersect([1,2,2,1], [2,2])))\nprint(sorted(intersect([4,9,5], [9,4,9,8,4])))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int[] intersect(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        int[] r1 = intersect(new int[]{1,2,2,1}, new int[]{2,2});\n        Arrays.sort(r1);\n        System.out.println(Arrays.toString(r1));\n        int[] r2 = intersect(new int[]{4,9,5}, new int[]{9,4,9,8,4});\n        Arrays.sort(r2);\n        System.out.println(Arrays.toString(r2));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}\n\nint* intersect(int* nums1, int n1Size, int* nums2, int n2Size, int* returnSize) {\n    // Write your solution here\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int rs;\n    int a[]={1,2,2,1}, b[]={2,2};\n    int*r=intersect(a,4,b,2,&rs);\n    if(r){qsort(r,rs,sizeof(int),cmp);printf("[");for(int i=0;i<rs;i++){if(i)printf(",");printf("%d",r[i]);}printf("]\\n");free(r);}\n    int c[]={4,9,5}, d[]={9,4,9,8,4};\n    r=intersect(c,3,d,5,&rs);\n    if(r){qsort(r,rs,sizeof(int),cmp);printf("[");for(int i=0;i<rs;i++){if(i)printf(",");printf("%d",r[i]);}printf("]\\n");free(r);}\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> a={1,2,2,1}, b={2,2};\n    auto r1=intersect(a,b); sort(r1.begin(),r1.end());\n    cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<r1[i];}cout<<"]"<<endl;\n    vector<int> c={4,9,5}, d={9,4,9,8,4};\n    auto r2=intersect(c,d); sort(r2.begin(),r2.end());\n    cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<r2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[ 2, 2 ]\n[ 4, 9 ]", python: "[2, 2]\n[4, 9]", java: "[2, 2]\n[4, 9]", c: "[2,2]\n[4,9]", cpp: "[2,2]\n[4,9]" },
    hiddenTests: {
      javascript: { code: `console.log(intersect([1],[1]));`, expected: "[ 1 ]" },
      python: { code: `print(sorted(intersect([1],[1])))`, expected: "[1]" },
      java: { code: `int[] r=intersect(new int[]{1},new int[]{1});Arrays.sort(r);System.out.println(Arrays.toString(r));`, expected: "[1]" },
      c: { code: `int x[]={1},y[]={1};r=intersect(x,1,y,1,&rs);if(r){printf("[%d]\\n",r[0]);free(r);}`, expected: "[1]" },
      cpp: { code: `vector<int> x={1},y={1};auto r=intersect(x,y);cout<<"["<<r[0]<<"]"<<endl;`, expected: "[1]" },
    },
  },

  "find-the-index": {
    id: "find-the-index", title: "Find the Index of the First Occurrence", difficulty: "Easy", category: "String", order: 34,
    description: { text: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if not found.", notes: [] },
    examples: [
      { input: 'haystack = "sadbutsad", needle = "sad"', output: "0" },
      { input: 'haystack = "leetcode", needle = "leeto"', output: "-1" },
    ],
    constraints: ["1 ≤ haystack.length, needle.length ≤ 10⁴"],
    starterCode: {
      javascript: `function strStr(haystack, needle) {\n  // Write your solution here\n}\n\nconsole.log(strStr("sadbutsad", "sad"));\nconsole.log(strStr("leetcode", "leeto"));`,
      python: `def strStr(haystack, needle):\n    # Write your solution here\n    pass\n\nprint(strStr("sadbutsad", "sad"))\nprint(strStr("leetcode", "leeto"))`,
      java: `class Solution {\n    public static int strStr(String haystack, String needle) {\n        // Write your solution here\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(strStr("sadbutsad", "sad"));\n        System.out.println(strStr("leetcode", "leeto"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nint strStr(char* haystack, char* needle) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    printf("%d\\n", strStr("sadbutsad", "sad"));\n    printf("%d\\n", strStr("leetcode", "leeto"));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint strStr(string haystack, string needle) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    cout<<strStr("sadbutsad","sad")<<endl;\n    cout<<strStr("leetcode","leeto")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "0\n-1", python: "0\n-1", java: "0\n-1", c: "0\n-1", cpp: "0\n-1" },
    hiddenTests: {
      javascript: { code: `console.log(strStr("hello","ll"));`, expected: "2" },
      python: { code: `print(strStr("hello","ll"))`, expected: "2" },
      java: { code: `System.out.println(strStr("hello","ll"));`, expected: "2" },
      c: { code: `printf("%d\\n",strStr("hello","ll"));`, expected: "2" },
      cpp: { code: `cout<<strStr("hello","ll")<<endl;`, expected: "2" },
    },
  },

  "sqrt-x": {
    id: "sqrt-x", title: "Sqrt(x)", difficulty: "Easy", category: "Math • Binary Search", order: 35,
    description: { text: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer.", notes: [] },
    examples: [
      { input: "x = 4", output: "2" },
      { input: "x = 8", output: "2", explanation: "sqrt(8) = 2.828..., rounded down to 2" },
    ],
    constraints: ["0 ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function mySqrt(x) {\n  // Write your solution here\n}\n\nconsole.log(mySqrt(4));\nconsole.log(mySqrt(8));\nconsole.log(mySqrt(0));`,
      python: `def mySqrt(x):\n    # Write your solution here\n    pass\n\nprint(mySqrt(4))\nprint(mySqrt(8))\nprint(mySqrt(0))`,
      java: `class Solution {\n    public static int mySqrt(int x) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(mySqrt(4));\n        System.out.println(mySqrt(8));\n        System.out.println(mySqrt(0));\n    }\n}`,
      c: `#include <stdio.h>\n\nint mySqrt(int x) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", mySqrt(4));\n    printf("%d\\n", mySqrt(8));\n    printf("%d\\n", mySqrt(0));\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint mySqrt(int x) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<mySqrt(4)<<endl;\n    cout<<mySqrt(8)<<endl;\n    cout<<mySqrt(0)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "2\n2\n0", python: "2\n2\n0", java: "2\n2\n0", c: "2\n2\n0", cpp: "2\n2\n0" },
    hiddenTests: {
      javascript: { code: `console.log(mySqrt(1));console.log(mySqrt(16));`, expected: "1\n4" },
      python: { code: `print(mySqrt(1))\nprint(mySqrt(16))`, expected: "1\n4" },
      java: { code: `System.out.println(mySqrt(1));System.out.println(mySqrt(16));`, expected: "1\n4" },
      c: { code: `printf("%d\\n",mySqrt(1));printf("%d\\n",mySqrt(16));`, expected: "1\n4" },
      cpp: { code: `cout<<mySqrt(1)<<endl;cout<<mySqrt(16)<<endl;`, expected: "1\n4" },
    },
  },
};
