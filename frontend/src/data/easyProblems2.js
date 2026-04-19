export const EASY_PROBLEMS_2 = {
  "valid-anagram": {
    id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", category: "String • Hash Table", order: 13,
    description: { text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", notes: [] },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {\n  // Write your solution here\n}\n\nconsole.log(isAnagram("anagram", "nagaram"));\nconsole.log(isAnagram("rat", "car"));`,
      python: `def isAnagram(s, t):\n    # Write your solution here\n    pass\n\nprint(isAnagram("anagram", "nagaram"))\nprint(isAnagram("rat", "car"))`,
      java: `class Solution {\n    public static boolean isAnagram(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAnagram("anagram", "nagaram"));\n        System.out.println(isAnagram("rat", "car"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\n\nbool isAnagram(char* s, char* t) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", isAnagram("anagram", "nagaram") ? "true" : "false");\n    printf("%s\\n", isAnagram("rat", "car") ? "true" : "false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout << (isAnagram("anagram", "nagaram") ? "true" : "false") << endl;\n    cout << (isAnagram("rat", "car") ? "true" : "false") << endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse", c: "true\nfalse", cpp: "true\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(isAnagram("a","a"));console.log(isAnagram("ab","a"));`, expected: "true\nfalse" },
      python: { code: `print(isAnagram("a","a"))\nprint(isAnagram("ab","a"))`, expected: "True\nFalse" },
      java: { code: `System.out.println(isAnagram("a","a"));System.out.println(isAnagram("ab","a"));`, expected: "true\nfalse" },
      c: { code: `printf("%s\\n",isAnagram("a","a")?"true":"false");printf("%s\\n",isAnagram("ab","a")?"true":"false");`, expected: "true\nfalse" },
      cpp: { code: `cout<<(isAnagram("a","a")?"true":"false")<<endl;cout<<(isAnagram("ab","a")?"true":"false")<<endl;`, expected: "true\nfalse" },
    },
  },

  "missing-number": {
    id: "missing-number", title: "Missing Number", difficulty: "Easy", category: "Array • Math • Bit", order: 14,
    description: { text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing.", notes: [] },
    examples: [
      { input: "nums = [3,0,1]", output: "2" },
      { input: "nums = [0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function missingNumber(nums) {\n  // Write your solution here\n}\n\nconsole.log(missingNumber([3,0,1]));\nconsole.log(missingNumber([0,1]));\nconsole.log(missingNumber([9,6,4,2,3,5,7,0,1]));`,
      python: `def missingNumber(nums):\n    # Write your solution here\n    pass\n\nprint(missingNumber([3,0,1]))\nprint(missingNumber([0,1]))\nprint(missingNumber([9,6,4,2,3,5,7,0,1]))`,
      java: `class Solution {\n    public static int missingNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(missingNumber(new int[]{3,0,1}));\n        System.out.println(missingNumber(new int[]{0,1}));\n        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint missingNumber(int* nums, int numsSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[] = {3,0,1};\n    printf("%d\\n", missingNumber(n1, 3));\n    int n2[] = {0,1};\n    printf("%d\\n", missingNumber(n2, 2));\n    int n3[] = {9,6,4,2,3,5,7,0,1};\n    printf("%d\\n", missingNumber(n3, 9));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint missingNumber(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={3,0,1}; cout<<missingNumber(n1)<<endl;\n    vector<int> n2={0,1}; cout<<missingNumber(n2)<<endl;\n    vector<int> n3={9,6,4,2,3,5,7,0,1}; cout<<missingNumber(n3)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "2\n2\n8", python: "2\n2\n8", java: "2\n2\n8", c: "2\n2\n8", cpp: "2\n2\n8" },
    hiddenTests: {
      javascript: { code: `console.log(missingNumber([0]));`, expected: "1" },
      python: { code: `print(missingNumber([0]))`, expected: "1" },
      java: { code: `System.out.println(missingNumber(new int[]{0}));`, expected: "1" },
      c: { code: `int h[]={0};printf("%d\\n",missingNumber(h,1));`, expected: "1" },
      cpp: { code: `vector<int> h={0};cout<<missingNumber(h)<<endl;`, expected: "1" },
    },
  },

  "move-zeroes": {
    id: "move-zeroes", title: "Move Zeroes", difficulty: "Easy", category: "Array • Two Pointers", order: 15,
    description: { text: "Given an integer array nums, move all 0's to the end while maintaining the relative order of non-zero elements. Do this in-place.", notes: [] },
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "nums = [0]", output: "[0]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function moveZeroes(nums) {\n  // Write your solution here\n}\n\nlet n1 = [0,1,0,3,12];\nmoveZeroes(n1);\nconsole.log(n1);\nlet n2 = [0];\nmoveZeroes(n2);\nconsole.log(n2);`,
      python: `def moveZeroes(nums):\n    # Write your solution here\n    pass\n\nn1 = [0,1,0,3,12]\nmoveZeroes(n1)\nprint(n1)\nn2 = [0]\nmoveZeroes(n2)\nprint(n2)`,
      java: `import java.util.*;\n\nclass Solution {\n    public static void moveZeroes(int[] nums) {\n        // Write your solution here\n    }\n    public static void main(String[] args) {\n        int[] n1 = {0,1,0,3,12};\n        moveZeroes(n1);\n        System.out.println(Arrays.toString(n1));\n        int[] n2 = {0};\n        moveZeroes(n2);\n        System.out.println(Arrays.toString(n2));\n    }\n}`,
      c: `#include <stdio.h>\n\nvoid moveZeroes(int* nums, int numsSize) {\n    // Write your solution here\n}\n\nvoid printArr(int*a,int n){printf("[");for(int i=0;i<n;i++){if(i)printf(",");printf("%d",a[i]);}printf("]\\n");}\n\nint main() {\n    int n1[] = {0,1,0,3,12};\n    moveZeroes(n1, 5);\n    printArr(n1,5);\n    int n2[] = {0};\n    moveZeroes(n2, 1);\n    printArr(n2,1);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid moveZeroes(vector<int>& nums) {\n    // Write your solution here\n}\n\nint main() {\n    vector<int> n1={0,1,0,3,12};\n    moveZeroes(n1);\n    cout<<"[";for(int i=0;i<n1.size();i++){if(i)cout<<",";cout<<n1[i];}cout<<"]"<<endl;\n    vector<int> n2={0};\n    moveZeroes(n2);\n    cout<<"[";for(int i=0;i<n2.size();i++){if(i)cout<<",";cout<<n2[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[ 1, 3, 12, 0, 0 ]\n[ 0 ]", python: "[1, 3, 12, 0, 0]\n[0]", java: "[1, 3, 12, 0, 0]\n[0]", c: "[1,3,12,0,0]\n[0]", cpp: "[1,3,12,0,0]\n[0]" },
    hiddenTests: {
      javascript: { code: `let h=[1,0,2,0,3];moveZeroes(h);console.log(h);`, expected: "[ 1, 2, 3, 0, 0 ]" },
      python: { code: `h=[1,0,2,0,3]\nmoveZeroes(h)\nprint(h)`, expected: "[1, 2, 3, 0, 0]" },
      java: { code: `int[] h={1,0,2,0,3};moveZeroes(h);System.out.println(Arrays.toString(h));`, expected: "[1, 2, 3, 0, 0]" },
      c: { code: `int h[]={1,0,2,0,3};moveZeroes(h,5);printArr(h,5);`, expected: "[1,2,3,0,0]" },
      cpp: { code: `vector<int> h={1,0,2,0,3};moveZeroes(h);cout<<"[";for(int i=0;i<h.size();i++){if(i)cout<<",";cout<<h[i];}cout<<"]"<<endl;`, expected: "[1,2,3,0,0]" },
    },
  },

  "fizz-buzz": {
    id: "fizz-buzz", title: "Fizz Buzz", difficulty: "Easy", category: "Math • String", order: 16,
    description: { text: "Given an integer n, return a string array answer where: answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5, \"Fizz\" if divisible by 3, \"Buzz\" if divisible by 5, or i as a string.", notes: [] },
    examples: [
      { input: "n = 3", output: '["1","2","Fizz"]' },
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
    ],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function fizzBuzz(n) {\n  // Write your solution here\n}\n\nconsole.log(fizzBuzz(3));\nconsole.log(fizzBuzz(5));\nconsole.log(fizzBuzz(15));`,
      python: `def fizzBuzz(n):\n    # Write your solution here\n    pass\n\nprint(fizzBuzz(3))\nprint(fizzBuzz(5))\nprint(fizzBuzz(15))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static List<String> fizzBuzz(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(fizzBuzz(3));\n        System.out.println(fizzBuzz(5));\n        System.out.println(fizzBuzz(15));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nvoid fizzBuzz(int n) {\n    for(int i = 1; i <= n; i++) {\n        // Write your solution here\n    }\n}\n\nint main() {\n    fizzBuzz(5);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> fizzBuzz(int n) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    auto r = fizzBuzz(5);\n    cout << "[";\n    for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];}\n    cout << "]" << endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[ '1', '2', 'Fizz' ]\n[ '1', '2', 'Fizz', '4', 'Buzz' ]\n[\n  '1',    '2',\n  'Fizz', '4',\n  'Buzz', 'Fizz',\n  '7',    '8',\n  'Fizz', 'Buzz',\n  '11',   'Fizz',\n  '13',   '14',\n  'FizzBuzz'\n]", python: "['1', '2', 'Fizz']\n['1', '2', 'Fizz', '4', 'Buzz']\n['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']", java: "[1, 2, Fizz]\n[1, 2, Fizz, 4, Buzz]\n[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]", c: "1\n2\nFizz\n4\nBuzz\n", cpp: "[1,2,Fizz,4,Buzz]" },
    hiddenTests: {
      javascript: { code: `console.log(fizzBuzz(1));`, expected: "[ '1' ]" },
      python: { code: `print(fizzBuzz(1))`, expected: "['1']" },
      java: { code: `System.out.println(fizzBuzz(1));`, expected: "[1]" },
      c: { code: ``, expected: "" },
      cpp: { code: `auto h=fizzBuzz(1);cout<<"[";for(int i=0;i<h.size();i++){if(i)cout<<",";cout<<h[i];}cout<<"]"<<endl;`, expected: "[1]" },
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", category: "Array • Hash Table", order: 17,
    description: { text: "Given an integer array nums, return true if any value appears at least twice, and false if every element is distinct.", notes: [] },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {\n  // Write your solution here\n}\n\nconsole.log(containsDuplicate([1,2,3,1]));\nconsole.log(containsDuplicate([1,2,3,4]));`,
      python: `def containsDuplicate(nums):\n    # Write your solution here\n    pass\n\nprint(containsDuplicate([1,2,3,1]))\nprint(containsDuplicate([1,2,3,4]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(containsDuplicate(new int[]{1,2,3,1}));\n        System.out.println(containsDuplicate(new int[]{1,2,3,4}));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n\nbool containsDuplicate(int* nums, int numsSize) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    int n1[]={1,2,3,1}; printf("%s\\n", containsDuplicate(n1,4)?"true":"false");\n    int n2[]={1,2,3,4}; printf("%s\\n", containsDuplicate(n2,4)?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool containsDuplicate(vector<int>& nums) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    vector<int> n1={1,2,3,1}; cout<<(containsDuplicate(n1)?"true":"false")<<endl;\n    vector<int> n2={1,2,3,4}; cout<<(containsDuplicate(n2)?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse", c: "true\nfalse", cpp: "true\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));`, expected: "true" },
      python: { code: `print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))`, expected: "True" },
      java: { code: `System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));`, expected: "true" },
      c: { code: `int h[]={1,1,1,3,3,4,3,2,4,2};printf("%s\\n",containsDuplicate(h,10)?"true":"false");`, expected: "true" },
      cpp: { code: `vector<int> h={1,1,1,3,3,4,3,2,4,2};cout<<(containsDuplicate(h)?"true":"false")<<endl;`, expected: "true" },
    },
  },

  "majority-element": {
    id: "majority-element", title: "Majority Element", difficulty: "Easy", category: "Array • Hash Table", order: 18,
    description: { text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n/2⌋ times.", notes: [] },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function majorityElement(nums) {\n  // Write your solution here\n}\n\nconsole.log(majorityElement([3,2,3]));\nconsole.log(majorityElement([2,2,1,1,1,2,2]));`,
      python: `def majorityElement(nums):\n    # Write your solution here\n    pass\n\nprint(majorityElement([3,2,3]))\nprint(majorityElement([2,2,1,1,1,2,2]))`,
      java: `class Solution {\n    public static int majorityElement(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(majorityElement(new int[]{3,2,3}));\n        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));\n    }\n}`,
      c: `#include <stdio.h>\n\nint majorityElement(int* nums, int numsSize) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n1[]={3,2,3}; printf("%d\\n", majorityElement(n1,3));\n    int n2[]={2,2,1,1,1,2,2}; printf("%d\\n", majorityElement(n2,7));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint majorityElement(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    vector<int> n1={3,2,3}; cout<<majorityElement(n1)<<endl;\n    vector<int> n2={2,2,1,1,1,2,2}; cout<<majorityElement(n2)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "3\n2", python: "3\n2", java: "3\n2", c: "3\n2", cpp: "3\n2" },
    hiddenTests: {
      javascript: { code: `console.log(majorityElement([1]));`, expected: "1" },
      python: { code: `print(majorityElement([1]))`, expected: "1" },
      java: { code: `System.out.println(majorityElement(new int[]{1}));`, expected: "1" },
      c: { code: `int h[]={1};printf("%d\\n",majorityElement(h,1));`, expected: "1" },
      cpp: { code: `vector<int> h={1};cout<<majorityElement(h)<<endl;`, expected: "1" },
    },
  },

  "happy-number": {
    id: "happy-number", title: "Happy Number", difficulty: "Easy", category: "Math • Hash Table", order: 19,
    description: { text: "Write an algorithm to determine if a number n is happy. A happy number is defined by replacing it by the sum of squares of its digits repeatedly until it equals 1.", notes: [] },
    examples: [
      { input: "n = 19", output: "true", explanation: "1²+9²=82, 8²+2²=68, 6²+8²=100, 1²+0²+0²=1" },
      { input: "n = 2", output: "false" },
    ],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isHappy(n) {\n  // Write your solution here\n}\n\nconsole.log(isHappy(19));\nconsole.log(isHappy(2));`,
      python: `def isHappy(n):\n    # Write your solution here\n    pass\n\nprint(isHappy(19))\nprint(isHappy(2))`,
      java: `class Solution {\n    public static boolean isHappy(int n) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isHappy(19));\n        System.out.println(isHappy(2));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n\nbool isHappy(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", isHappy(19)?"true":"false");\n    printf("%s\\n", isHappy(2)?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nbool isHappy(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout<<(isHappy(19)?"true":"false")<<endl;\n    cout<<(isHappy(2)?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse", c: "true\nfalse", cpp: "true\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(isHappy(1));console.log(isHappy(7));`, expected: "true\ntrue" },
      python: { code: `print(isHappy(1))\nprint(isHappy(7))`, expected: "True\nTrue" },
      java: { code: `System.out.println(isHappy(1));System.out.println(isHappy(7));`, expected: "true\ntrue" },
      c: { code: `printf("%s\\n",isHappy(1)?"true":"false");printf("%s\\n",isHappy(7)?"true":"false");`, expected: "true\ntrue" },
      cpp: { code: `cout<<(isHappy(1)?"true":"false")<<endl;cout<<(isHappy(7)?"true":"false")<<endl;`, expected: "true\ntrue" },
    },
  },

  "power-of-two": {
    id: "power-of-two", title: "Power of Two", difficulty: "Easy", category: "Math • Bit Manipulation", order: 20,
    description: { text: "Given an integer n, return true if it is a power of two. Otherwise, return false.", notes: [] },
    examples: [
      { input: "n = 1", output: "true" },
      { input: "n = 16", output: "true" },
      { input: "n = 3", output: "false" },
    ],
    constraints: ["-2³¹ ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {\n  // Write your solution here\n}\n\nconsole.log(isPowerOfTwo(1));\nconsole.log(isPowerOfTwo(16));\nconsole.log(isPowerOfTwo(3));`,
      python: `def isPowerOfTwo(n):\n    # Write your solution here\n    pass\n\nprint(isPowerOfTwo(1))\nprint(isPowerOfTwo(16))\nprint(isPowerOfTwo(3))`,
      java: `class Solution {\n    public static boolean isPowerOfTwo(int n) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPowerOfTwo(1));\n        System.out.println(isPowerOfTwo(16));\n        System.out.println(isPowerOfTwo(3));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n\nbool isPowerOfTwo(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", isPowerOfTwo(1)?"true":"false");\n    printf("%s\\n", isPowerOfTwo(16)?"true":"false");\n    printf("%s\\n", isPowerOfTwo(3)?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nbool isPowerOfTwo(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout<<(isPowerOfTwo(1)?"true":"false")<<endl;\n    cout<<(isPowerOfTwo(16)?"true":"false")<<endl;\n    cout<<(isPowerOfTwo(3)?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\ntrue\nfalse", python: "True\nTrue\nFalse", java: "true\ntrue\nfalse", c: "true\ntrue\nfalse", cpp: "true\ntrue\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(isPowerOfTwo(0));console.log(isPowerOfTwo(-16));`, expected: "false\nfalse" },
      python: { code: `print(isPowerOfTwo(0))\nprint(isPowerOfTwo(-16))`, expected: "False\nFalse" },
      java: { code: `System.out.println(isPowerOfTwo(0));System.out.println(isPowerOfTwo(-16));`, expected: "false\nfalse" },
      c: { code: `printf("%s\\n",isPowerOfTwo(0)?"true":"false");printf("%s\\n",isPowerOfTwo(-16)?"true":"false");`, expected: "false\nfalse" },
      cpp: { code: `cout<<(isPowerOfTwo(0)?"true":"false")<<endl;cout<<(isPowerOfTwo(-16)?"true":"false")<<endl;`, expected: "false\nfalse" },
    },
  },

  "add-digits": {
    id: "add-digits", title: "Add Digits", difficulty: "Easy", category: "Math", order: 21,
    description: { text: "Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.", notes: [] },
    examples: [
      { input: "num = 38", output: "2", explanation: "3+8=11, 1+1=2" },
      { input: "num = 0", output: "0" },
    ],
    constraints: ["0 ≤ num ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function addDigits(num) {\n  // Write your solution here\n}\n\nconsole.log(addDigits(38));\nconsole.log(addDigits(0));`,
      python: `def addDigits(num):\n    # Write your solution here\n    pass\n\nprint(addDigits(38))\nprint(addDigits(0))`,
      java: `class Solution {\n    public static int addDigits(int num) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(addDigits(38));\n        System.out.println(addDigits(0));\n    }\n}`,
      c: `#include <stdio.h>\n\nint addDigits(int num) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", addDigits(38));\n    printf("%d\\n", addDigits(0));\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint addDigits(int num) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<addDigits(38)<<endl;\n    cout<<addDigits(0)<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "2\n0", python: "2\n0", java: "2\n0", c: "2\n0", cpp: "2\n0" },
    hiddenTests: {
      javascript: { code: `console.log(addDigits(99));`, expected: "9" },
      python: { code: `print(addDigits(99))`, expected: "9" },
      java: { code: `System.out.println(addDigits(99));`, expected: "9" },
      c: { code: `printf("%d\\n",addDigits(99));`, expected: "9" },
      cpp: { code: `cout<<addDigits(99)<<endl;`, expected: "9" },
    },
  },

  "power-of-three": {
    id: "power-of-three", title: "Power of Three", difficulty: "Easy", category: "Math", order: 22,
    description: { text: "Given an integer n, return true if it is a power of three. Otherwise, return false.", notes: [] },
    examples: [
      { input: "n = 27", output: "true" },
      { input: "n = 0", output: "false" },
      { input: "n = -1", output: "false" },
    ],
    constraints: ["-2³¹ ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPowerOfThree(n) {\n  // Write your solution here\n}\n\nconsole.log(isPowerOfThree(27));\nconsole.log(isPowerOfThree(0));\nconsole.log(isPowerOfThree(9));`,
      python: `def isPowerOfThree(n):\n    # Write your solution here\n    pass\n\nprint(isPowerOfThree(27))\nprint(isPowerOfThree(0))\nprint(isPowerOfThree(9))`,
      java: `class Solution {\n    public static boolean isPowerOfThree(int n) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPowerOfThree(27));\n        System.out.println(isPowerOfThree(0));\n        System.out.println(isPowerOfThree(9));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdbool.h>\n\nbool isPowerOfThree(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    printf("%s\\n", isPowerOfThree(27)?"true":"false");\n    printf("%s\\n", isPowerOfThree(0)?"true":"false");\n    printf("%s\\n", isPowerOfThree(9)?"true":"false");\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\n\nbool isPowerOfThree(int n) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    cout<<(isPowerOfThree(27)?"true":"false")<<endl;\n    cout<<(isPowerOfThree(0)?"true":"false")<<endl;\n    cout<<(isPowerOfThree(9)?"true":"false")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "true\nfalse\ntrue", python: "True\nFalse\nTrue", java: "true\nfalse\ntrue", c: "true\nfalse\ntrue", cpp: "true\nfalse\ntrue" },
    hiddenTests: {
      javascript: { code: `console.log(isPowerOfThree(45));`, expected: "false" },
      python: { code: `print(isPowerOfThree(45))`, expected: "False" },
      java: { code: `System.out.println(isPowerOfThree(45));`, expected: "false" },
      c: { code: `printf("%s\\n",isPowerOfThree(45)?"true":"false");`, expected: "false" },
      cpp: { code: `cout<<(isPowerOfThree(45)?"true":"false")<<endl;`, expected: "false" },
    },
  },

  "plus-one": {
    id: "plus-one", title: "Plus One", difficulty: "Easy", category: "Array • Math", order: 23,
    description: { text: "You are given a large integer represented as an integer array digits. Increment the integer by one and return the resulting array.", notes: [] },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [9]", output: "[1,0]" },
    ],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9"],
    starterCode: {
      javascript: `function plusOne(digits) {\n  // Write your solution here\n}\n\nconsole.log(plusOne([1,2,3]));\nconsole.log(plusOne([9]));\nconsole.log(plusOne([9,9]));`,
      python: `def plusOne(digits):\n    # Write your solution here\n    pass\n\nprint(plusOne([1,2,3]))\nprint(plusOne([9]))\nprint(plusOne([9,9]))`,
      java: `import java.util.*;\n\nclass Solution {\n    public static int[] plusOne(int[] digits) {\n        // Write your solution here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));\n        System.out.println(Arrays.toString(plusOne(new int[]{9})));\n        System.out.println(Arrays.toString(plusOne(new int[]{9,9})));\n    }\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nint* plusOne(int* digits, int digitsSize, int* returnSize) {\n    // Write your solution here\n    *returnSize = 0;\n    return NULL;\n}\n\nvoid printArr(int*a,int n){printf("[");for(int i=0;i<n;i++){if(i)printf(",");printf("%d",a[i]);}printf("]\\n");}\n\nint main() {\n    int rs;\n    int d1[]={1,2,3}; int*r1=plusOne(d1,3,&rs); printArr(r1,rs); free(r1);\n    int d2[]={9}; int*r2=plusOne(d2,1,&rs); printArr(r2,rs); free(r2);\n    int d3[]={9,9}; int*r3=plusOne(d3,2,&rs); printArr(r3,rs); free(r3);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> plusOne(vector<int>& digits) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    vector<int> d1={1,2,3}; auto r1=plusOne(d1); cout<<"[";for(int i=0;i<r1.size();i++){if(i)cout<<",";cout<<r1[i];}cout<<"]"<<endl;\n    vector<int> d2={9}; auto r2=plusOne(d2); cout<<"[";for(int i=0;i<r2.size();i++){if(i)cout<<",";cout<<r2[i];}cout<<"]"<<endl;\n    vector<int> d3={9,9}; auto r3=plusOne(d3); cout<<"[";for(int i=0;i<r3.size();i++){if(i)cout<<",";cout<<r3[i];}cout<<"]"<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "[ 1, 2, 4 ]\n[ 1, 0 ]\n[ 1, 0, 0 ]", python: "[1, 2, 4]\n[1, 0]\n[1, 0, 0]", java: "[1, 2, 4]\n[1, 0]\n[1, 0, 0]", c: "[1,2,4]\n[1,0]\n[1,0,0]", cpp: "[1,2,4]\n[1,0]\n[1,0,0]" },
    hiddenTests: {
      javascript: { code: `console.log(plusOne([4,3,2,1]));`, expected: "[ 4, 3, 2, 2 ]" },
      python: { code: `print(plusOne([4,3,2,1]))`, expected: "[4, 3, 2, 2]" },
      java: { code: `System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1})));`, expected: "[4, 3, 2, 2]" },
      c: { code: `int d[]={4,3,2,1};int*r=plusOne(d,4,&rs);printArr(r,rs);free(r);`, expected: "[4,3,2,2]" },
      cpp: { code: `vector<int> d={4,3,2,1};auto r=plusOne(d);cout<<"[";for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];}cout<<"]"<<endl;`, expected: "[4,3,2,2]" },
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word", title: "Length of Last Word", difficulty: "Easy", category: "String", order: 24,
    description: { text: "Given a string s consisting of words and spaces, return the length of the last word in the string.", notes: [] },
    examples: [
      { input: 's = "Hello World"', output: "5" },
      { input: 's = "   fly me   to   the moon  "', output: "4" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {\n  // Write your solution here\n}\n\nconsole.log(lengthOfLastWord("Hello World"));\nconsole.log(lengthOfLastWord("   fly me   to   the moon  "));`,
      python: `def lengthOfLastWord(s):\n    # Write your solution here\n    pass\n\nprint(lengthOfLastWord("Hello World"))\nprint(lengthOfLastWord("   fly me   to   the moon  "))`,
      java: `class Solution {\n    public static int lengthOfLastWord(String s) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLastWord("Hello World"));\n        System.out.println(lengthOfLastWord("   fly me   to   the moon  "));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nint lengthOfLastWord(char* s) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", lengthOfLastWord("Hello World"));\n    printf("%d\\n", lengthOfLastWord("   fly me   to   the moon  "));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint lengthOfLastWord(string s) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    cout<<lengthOfLastWord("Hello World")<<endl;\n    cout<<lengthOfLastWord("   fly me   to   the moon  ")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "5\n4", python: "5\n4", java: "5\n4", c: "5\n4", cpp: "5\n4" },
    hiddenTests: {
      javascript: { code: `console.log(lengthOfLastWord("a"));`, expected: "1" },
      python: { code: `print(lengthOfLastWord("a"))`, expected: "1" },
      java: { code: `System.out.println(lengthOfLastWord("a"));`, expected: "1" },
      c: { code: `printf("%d\\n",lengthOfLastWord("a"));`, expected: "1" },
      cpp: { code: `cout<<lengthOfLastWord("a")<<endl;`, expected: "1" },
    },
  },

  "first-unique-character": {
    id: "first-unique-character", title: "First Unique Character in a String", difficulty: "Easy", category: "String • Hash Table", order: 25,
    description: { text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.", notes: [] },
    examples: [
      { input: 's = "leetcode"', output: "0" },
      { input: 's = "loveleetcode"', output: "2" },
      { input: 's = "aabb"', output: "-1" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function firstUniqChar(s) {\n  // Write your solution here\n}\n\nconsole.log(firstUniqChar("leetcode"));\nconsole.log(firstUniqChar("loveleetcode"));\nconsole.log(firstUniqChar("aabb"));`,
      python: `def firstUniqChar(s):\n    # Write your solution here\n    pass\n\nprint(firstUniqChar("leetcode"))\nprint(firstUniqChar("loveleetcode"))\nprint(firstUniqChar("aabb"))`,
      java: `class Solution {\n    public static int firstUniqChar(String s) {\n        // Write your solution here\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(firstUniqChar("leetcode"));\n        System.out.println(firstUniqChar("loveleetcode"));\n        System.out.println(firstUniqChar("aabb"));\n    }\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n\nint firstUniqChar(char* s) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    printf("%d\\n", firstUniqChar("leetcode"));\n    printf("%d\\n", firstUniqChar("loveleetcode"));\n    printf("%d\\n", firstUniqChar("aabb"));\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nint firstUniqChar(string s) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    cout<<firstUniqChar("leetcode")<<endl;\n    cout<<firstUniqChar("loveleetcode")<<endl;\n    cout<<firstUniqChar("aabb")<<endl;\n    return 0;\n}`,
    },
    expectedOutput: { javascript: "0\n2\n-1", python: "0\n2\n-1", java: "0\n2\n-1", c: "0\n2\n-1", cpp: "0\n2\n-1" },
    hiddenTests: {
      javascript: { code: `console.log(firstUniqChar("z"));`, expected: "0" },
      python: { code: `print(firstUniqChar("z"))`, expected: "0" },
      java: { code: `System.out.println(firstUniqChar("z"));`, expected: "0" },
      c: { code: `printf("%d\\n",firstUniqChar("z"));`, expected: "0" },
      cpp: { code: `cout<<firstUniqChar("z")<<endl;`, expected: "0" },
    },
  },
};
