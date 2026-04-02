export const PROBLEMS = {
  "two-sum": {
    id: "two-sum", title: "Two Sum", difficulty: "Easy", category: "Array • Hash Table",
    description: { text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", notes: ["Each input has exactly one solution.", "You may not use the same element twice."] },
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" }, { input: "nums = [3,2,4], target = 6", output: "[1,2]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n}\nconsole.log(twoSum([2,7,11,15], 9));\nconsole.log(twoSum([3,2,4], 6));\nconsole.log(twoSum([3,3], 6));`,
      python: `def twoSum(nums, target):\n    # Write your solution here\n    pass\nprint(twoSum([2,7,11,15], 9))\nprint(twoSum([3,2,4], 6))\nprint(twoSum([3,3], 6))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] twoSum(int[] nums, int target) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));\n        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));\n        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));\n    }\n}`
    },
    expectedOutput: { javascript: "[0,1]\n[1,2]\n[0,1]", python: "[0, 1]\n[1, 2]\n[0, 1]", java: "[0, 1]\n[1, 2]\n[0, 1]" }
  },

  "reverse-string": {
    id: "reverse-string", title: "Reverse String", difficulty: "Easy", category: "String • Two Pointers",
    description: { text: "Write a function that reverses a string. The input string is given as an array of characters s.", notes: ["Modify the input array in-place with O(1) extra memory."] },
    examples: [{ input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' }, { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' }],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function reverseString(s) {\n  // Write your solution here\n}\nlet t1 = ["h","e","l","l","o"];\nreverseString(t1);\nconsole.log(t1);\nlet t2 = ["H","a","n","n","a","h"];\nreverseString(t2);\nconsole.log(t2);`,
      python: `def reverseString(s):\n    # Write your solution here\n    pass\nt1 = ["h","e","l","l","o"]\nreverseString(t1)\nprint(t1)\nt2 = ["H","a","n","n","a","h"]\nreverseString(t2)\nprint(t2)`,
      java: `import java.util.*;\nclass Solution {\n    public static void reverseString(char[] s) {\n    }\n    public static void main(String[] args) {\n        char[] t1 = {'h','e','l','l','o'};\n        reverseString(t1);\n        System.out.println(Arrays.toString(t1));\n        char[] t2 = {'H','a','n','n','a','h'};\n        reverseString(t2);\n        System.out.println(Arrays.toString(t2));\n    }\n}`
    },
    expectedOutput: { javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]', python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']", java: "[o, l, l, e, h]\n[h, a, n, n, a, H]" }
  },

  "valid-palindrome": {
    id: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", category: "String • Two Pointers",
    description: { text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.", notes: ["Given a string s, return true if it is a palindrome, or false otherwise."] },
    examples: [{ input: 's = "A man, a plan, a canal: Panama"', output: "true" }, { input: 's = "race a car"', output: "false" }],
    constraints: ["1 ≤ s.length ≤ 2 × 10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  // Write your solution here\n}\nconsole.log(isPalindrome("A man, a plan, a canal: Panama"));\nconsole.log(isPalindrome("race a car"));\nconsole.log(isPalindrome(" "));`,
      python: `def isPalindrome(s):\n    # Write your solution here\n    pass\nprint(isPalindrome("A man, a plan, a canal: Panama"))\nprint(isPalindrome("race a car"))\nprint(isPalindrome(" "))`,
      java: `class Solution {\n    public static boolean isPalindrome(String s) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));\n        System.out.println(isPalindrome("race a car"));\n        System.out.println(isPalindrome(" "));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse\ntrue", python: "True\nFalse\nTrue", java: "true\nfalse\ntrue" }
  },

  "maximum-subarray": {
    id: "maximum-subarray", title: "Maximum Subarray", difficulty: "Medium", category: "Array • Dynamic Programming",
    description: { text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.", notes: [] },
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." }, { input: "nums = [1]", output: "1" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log(maxSubArray([1]));\nconsole.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums):\n    # Write your solution here\n    pass\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))\nprint(maxSubArray([1]))\nprint(maxSubArray([5,4,-1,7,8]))`,
      java: `class Solution {\n    public static int maxSubArray(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));\n        System.out.println(maxSubArray(new int[]{1}));\n        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));\n    }\n}`
    },
    expectedOutput: { javascript: "6\n1\n23", python: "6\n1\n23", java: "6\n1\n23" }
  },

  "container-with-most-water": {
    id: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", category: "Array • Two Pointers",
    description: { text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).", notes: ["Find two lines that together with the x-axis form a container that contains the most water.", "Return the maximum amount of water a container can store."] },
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }, { input: "height = [1,1]", output: "1" }],
    constraints: ["2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));\nconsole.log(maxArea([1,1]));`,
      python: `def maxArea(height):\n    # Write your solution here\n    pass\nprint(maxArea([1,8,6,2,5,4,8,3,7]))\nprint(maxArea([1,1]))`,
      java: `class Solution {\n    public static int maxArea(int[] height) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));\n        System.out.println(maxArea(new int[]{1,1}));\n    }\n}`
    },
    expectedOutput: { javascript: "49\n1", python: "49\n1", java: "49\n1" }
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Array • Dynamic Programming",
    description: { text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy and a single day to sell.", notes: ["Return the maximum profit. If no profit is possible, return 0."] },
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1), sell on day 5 (price=6), profit = 5." }, { input: "prices = [7,6,4,3,1]", output: "0" }],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}\nconsole.log(maxProfit([7,1,5,3,6,4]));\nconsole.log(maxProfit([7,6,4,3,1]));`,
      python: `def maxProfit(prices):\n    # Write your solution here\n    pass\nprint(maxProfit([7,1,5,3,6,4]))\nprint(maxProfit([7,6,4,3,1]))`,
      java: `class Solution {\n    public static int maxProfit(int[] prices) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));\n        System.out.println(maxProfit(new int[]{7,6,4,3,1}));\n    }\n}`
    },
    expectedOutput: { javascript: "5\n0", python: "5\n0", java: "5\n0" }
  },

  "valid-anagram": {
    id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", category: "String • Hash Table",
    description: { text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", notes: ["An anagram uses all original letters exactly once."] },
    examples: [{ input: 's = "anagram", t = "nagaram"', output: "true" }, { input: 's = "rat", t = "car"', output: "false" }],
    constraints: ["1 ≤ s.length, t.length ≤ 5 × 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {\n  // Write your solution here\n}\nconsole.log(isAnagram("anagram", "nagaram"));\nconsole.log(isAnagram("rat", "car"));`,
      python: `def isAnagram(s, t):\n    # Write your solution here\n    pass\nprint(isAnagram("anagram", "nagaram"))\nprint(isAnagram("rat", "car"))`,
      java: `class Solution {\n    public static boolean isAnagram(String s, String t) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAnagram("anagram", "nagaram"));\n        System.out.println(isAnagram("rat", "car"));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse" }
  },

  "contains-duplicate": {
    id: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", category: "Array • Hash Table",
    description: { text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.", notes: [] },
    examples: [{ input: "nums = [1,2,3,1]", output: "true" }, { input: "nums = [1,2,3,4]", output: "false" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {\n  // Write your solution here\n}\nconsole.log(containsDuplicate([1,2,3,1]));\nconsole.log(containsDuplicate([1,2,3,4]));`,
      python: `def containsDuplicate(nums):\n    # Write your solution here\n    pass\nprint(containsDuplicate([1,2,3,1]))\nprint(containsDuplicate([1,2,3,4]))`,
      java: `class Solution {\n    public static boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(containsDuplicate(new int[]{1,2,3,1}));\n        System.out.println(containsDuplicate(new int[]{1,2,3,4}));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse" }
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List • Recursion",
    description: { text: "You are given the heads of two sorted linked lists. Merge them into one sorted list by splicing together the nodes of the first two lists.", notes: ["Return the head of the merged linked list."] },
    examples: [{ input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }, { input: "list1 = [], list2 = [0]", output: "[0]" }],
    constraints: ["0 ≤ list length ≤ 50", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {\n  // Using arrays for simplicity\n}\nconsole.log(mergeTwoLists([1,2,4], [1,3,4]));\nconsole.log(mergeTwoLists([], [0]));`,
      python: `def mergeTwoLists(l1, l2):\n    # Using arrays for simplicity\n    pass\nprint(mergeTwoLists([1,2,4], [1,3,4]))\nprint(mergeTwoLists([], [0]))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] mergeTwoLists(int[] l1, int[] l2) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(mergeTwoLists(new int[]{1,2,4}, new int[]{1,3,4})));\n        System.out.println(Arrays.toString(mergeTwoLists(new int[]{}, new int[]{0})));\n    }\n}`
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4]\n[0]", python: "[1, 1, 2, 3, 4, 4]\n[0]", java: "[1, 1, 2, 3, 4, 4]\n[0]" }
  },

  "climbing-stairs": {
    id: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", category: "Dynamic Programming • Math",
    description: { text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?", notes: [] },
    examples: [{ input: "n = 2", output: "2", explanation: "1+1 or 2" }, { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}\nconsole.log(climbStairs(2));\nconsole.log(climbStairs(3));\nconsole.log(climbStairs(5));`,
      python: `def climbStairs(n):\n    # Write your solution here\n    pass\nprint(climbStairs(2))\nprint(climbStairs(3))\nprint(climbStairs(5))`,
      java: `class Solution {\n    public static int climbStairs(int n) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(climbStairs(2));\n        System.out.println(climbStairs(3));\n        System.out.println(climbStairs(5));\n    }\n}`
    },
    expectedOutput: { javascript: "2\n3\n8", python: "2\n3\n8", java: "2\n3\n8" }
  },

  "binary-search": {
    id: "binary-search", title: "Binary Search", difficulty: "Easy", category: "Array • Binary Search",
    description: { text: "Given a sorted array of integers nums and a target value, return the index if the target is found. If not, return -1.", notes: ["You must write an algorithm with O(log n) runtime complexity."] },
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }, { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "All integers in nums are unique", "nums is sorted in ascending order"],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\nconsole.log(search([-1,0,3,5,9,12], 9));\nconsole.log(search([-1,0,3,5,9,12], 2));`,
      python: `def search(nums, target):\n    # Write your solution here\n    pass\nprint(search([-1,0,3,5,9,12], 9))\nprint(search([-1,0,3,5,9,12], 2))`,
      java: `class Solution {\n    public static int search(int[] nums, int target) {\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));\n        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));\n    }\n}`
    },
    expectedOutput: { javascript: "4\n-1", python: "4\n-1", java: "4\n-1" }
  },

  "linked-list-cycle": {
    id: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", category: "Linked List • Two Pointers",
    description: { text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.", notes: ["Return true if there is a cycle, false otherwise."] },
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "true", explanation: "Tail connects to node index 1" }, { input: "head = [1], pos = -1", output: "false" }],
    constraints: ["0 ≤ list length ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: {
      javascript: `// Detect cycle using Floyd's algorithm\nfunction hasCycle(arr, pos) {\n  // Write your solution here\n}\nconsole.log(hasCycle([3,2,0,-4], 1));\nconsole.log(hasCycle([1], -1));`,
      python: `def hasCycle(arr, pos):\n    # Write your solution here\n    pass\nprint(hasCycle([3,2,0,-4], 1))\nprint(hasCycle([1], -1))`,
      java: `class Solution {\n    public static boolean hasCycle(int[] arr, int pos) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(hasCycle(new int[]{3,2,0,-4}, 1));\n        System.out.println(hasCycle(new int[]{1}, -1));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse" }
  },

  "three-sum": {
    id: "three-sum", title: "3Sum", difficulty: "Medium", category: "Array • Two Pointers • Sorting",
    description: { text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.", notes: ["The solution set must not contain duplicate triplets."] },
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }, { input: "nums = [0,0,0]", output: "[[0,0,0]]" }],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));\nconsole.log(JSON.stringify(threeSum([0,0,0])));`,
      python: `def threeSum(nums):\n    # Write your solution here\n    pass\nprint(threeSum([-1,0,1,2,-1,-4]))\nprint(threeSum([0,0,0]))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));\n        System.out.println(threeSum(new int[]{0,0,0}));\n    }\n}`
    },
    expectedOutput: { javascript: "[[-1,-1,2],[-1,0,1]]\n[[0,0,0]]", python: "[[-1, -1, 2], [-1, 0, 1]]\n[[0, 0, 0]]", java: "[[-1, -1, 2], [-1, 0, 1]]\n[[0, 0, 0]]" }
  },

  "merge-intervals": {
    id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", category: "Array • Sorting",
    description: { text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.", notes: ["Return an array of the non-overlapping intervals that cover all the intervals in the input."] },
    examples: [{ input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Intervals [1,3] and [2,6] overlap, merged to [1,6]." }, { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" }],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2"],
    starterCode: {
      javascript: `function merge(intervals) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(merge([[1,3],[2,6],[8,10],[15,18]])));\nconsole.log(JSON.stringify(merge([[1,4],[4,5]])));`,
      python: `def merge(intervals):\n    # Write your solution here\n    pass\nprint(merge([[1,3],[2,6],[8,10],[15,18]]))\nprint(merge([[1,4],[4,5]]))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[][] merge(int[][] intervals) {\n        return new int[0][0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));\n        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));\n    }\n}`
    },
    expectedOutput: { javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]", python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]", java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]" }
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "String • Sliding Window • Hash Table",
    description: { text: "Given a string s, find the length of the longest substring without repeating characters.", notes: [] },
    examples: [{ input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3.' }, { input: 's = "bbbbb"', output: "1" }, { input: 's = "pwwkew"', output: "3" }],
    constraints: ["0 ≤ s.length ≤ 5 × 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\nconsole.log(lengthOfLongestSubstring("abcabcbb"));\nconsole.log(lengthOfLongestSubstring("bbbbb"));\nconsole.log(lengthOfLongestSubstring("pwwkew"));`,
      python: `def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass\nprint(lengthOfLongestSubstring("abcabcbb"))\nprint(lengthOfLongestSubstring("bbbbb"))\nprint(lengthOfLongestSubstring("pwwkew"))`,
      java: `class Solution {\n    public static int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring("abcabcbb"));\n        System.out.println(lengthOfLongestSubstring("bbbbb"));\n        System.out.println(lengthOfLongestSubstring("pwwkew"));\n    }\n}`
    },
    expectedOutput: { javascript: "3\n1\n3", python: "3\n1\n3", java: "3\n1\n3" }
  },

  "group-anagrams": {
    id: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", category: "String • Hash Table • Sorting",
    description: { text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.", notes: [] },
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));`,
      python: `def groupAnagrams(strs):\n    # Write your solution here\n    pass\nprint(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));\n    }\n}`
    },
    expectedOutput: { javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]', python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]", java: "[[eat, tea, ate], [tan, nat], [bat]]" }
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", category: "Array • Prefix Sum",
    description: { text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].", notes: ["You must write an algorithm that runs in O(n) time and without using the division operation."] },
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }, { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}\nconsole.log(productExceptSelf([1,2,3,4]));\nconsole.log(productExceptSelf([-1,1,0,-3,3]));`,
      python: `def productExceptSelf(nums):\n    # Write your solution here\n    pass\nprint(productExceptSelf([1,2,3,4]))\nprint(productExceptSelf([-1,1,0,-3,3]))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] productExceptSelf(int[] nums) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));\n        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));\n    }\n}`
    },
    expectedOutput: { javascript: "[24,12,8,6]\n[0,0,9,0,0]", python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]", java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]" }
  },

  "valid-parentheses": {
    id: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", category: "String • Stack",
    description: { text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", notes: ["Open brackets must be closed by the same type and in correct order."] },
    examples: [{ input: 's = "()"', output: "true" }, { input: 's = "([)]"', output: "false" }, { input: 's = "{[]}"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}\nconsole.log(isValid("()"));\nconsole.log(isValid("([)]"));\nconsole.log(isValid("{[]}"));`,
      python: `def isValid(s):\n    # Write your solution here\n    pass\nprint(isValid("()"))\nprint(isValid("([)]"))\nprint(isValid("{[]}"))`,
      java: `class Solution {\n    public static boolean isValid(String s) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isValid("()"));\n        System.out.println(isValid("([)]"));\n        System.out.println(isValid("{[]}"));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse\ntrue", python: "True\nFalse\nTrue", java: "true\nfalse\ntrue" }
  },

  "roman-to-integer": {
    id: "roman-to-integer", title: "Roman to Integer", difficulty: "Easy", category: "String • Hash Table • Math",
    description: { text: "Given a roman numeral, convert it to an integer.", notes: ["Roman numerals: I=1, V=5, X=10, L=50, C=100, D=500, M=1000"] },
    examples: [{ input: 's = "III"', output: "3" }, { input: 's = "LVIII"', output: "58" }, { input: 's = "MCMXCIV"', output: "1994" }],
    constraints: ["1 ≤ s.length ≤ 15"],
    starterCode: {
      javascript: `function romanToInt(s) {\n  // Write your solution here\n}\nconsole.log(romanToInt("III"));\nconsole.log(romanToInt("LVIII"));\nconsole.log(romanToInt("MCMXCIV"));`,
      python: `def romanToInt(s):\n    # Write your solution here\n    pass\nprint(romanToInt("III"))\nprint(romanToInt("LVIII"))\nprint(romanToInt("MCMXCIV"))`,
      java: `class Solution {\n    public static int romanToInt(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(romanToInt("III"));\n        System.out.println(romanToInt("LVIII"));\n        System.out.println(romanToInt("MCMXCIV"));\n    }\n}`
    },
    expectedOutput: { javascript: "3\n58\n1994", python: "3\n58\n1994", java: "3\n58\n1994" }
  },

  "longest-common-prefix": {
    id: "longest-common-prefix", title: "Longest Common Prefix", difficulty: "Easy", category: "String • Trie",
    description: { text: "Write a function to find the longest common prefix string amongst an array of strings.", notes: ["If there is no common prefix, return an empty string."] },
    examples: [{ input: 'strs = ["flower","flow","flight"]', output: '"fl"' }, { input: 'strs = ["dog","racecar","car"]', output: '""' }],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {\n  // Write your solution here\n}\nconsole.log(longestCommonPrefix(["flower","flow","flight"]));\nconsole.log(longestCommonPrefix(["dog","racecar","car"]));`,
      python: `def longestCommonPrefix(strs):\n    # Write your solution here\n    pass\nprint(longestCommonPrefix(["flower","flow","flight"]))\nprint(longestCommonPrefix(["dog","racecar","car"]))`,
      java: `class Solution {\n    public static String longestCommonPrefix(String[] strs) {\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"}));\n        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"}));\n    }\n}`
    },
    expectedOutput: { javascript: "fl\n", python: "fl\n", java: "fl\n" }
  },

  "move-zeroes": {
    id: "move-zeroes", title: "Move Zeroes", difficulty: "Easy", category: "Array • Two Pointers",
    description: { text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.", notes: ["You must do this in-place without making a copy of the array."] },
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }, { input: "nums = [0]", output: "[0]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function moveZeroes(nums) {\n  // Write your solution here\n}\nlet a=[0,1,0,3,12]; moveZeroes(a); console.log(a);\nlet b=[0]; moveZeroes(b); console.log(b);`,
      python: `def moveZeroes(nums):\n    # Write your solution here\n    pass\na=[0,1,0,3,12]; moveZeroes(a); print(a)\nb=[0]; moveZeroes(b); print(b)`,
      java: `import java.util.*;\nclass Solution {\n    public static void moveZeroes(int[] nums) {\n    }\n    public static void main(String[] args) {\n        int[] a={0,1,0,3,12}; moveZeroes(a); System.out.println(Arrays.toString(a));\n        int[] b={0}; moveZeroes(b); System.out.println(Arrays.toString(b));\n    }\n}`
    },
    expectedOutput: { javascript: "[1,3,12,0,0]\n[0]", python: "[1, 3, 12, 0, 0]\n[0]", java: "[1, 3, 12, 0, 0]\n[0]" }
  },

  "plus-one": {
    id: "plus-one", title: "Plus One", difficulty: "Easy", category: "Array • Math",
    description: { text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one and return the resulting array.", notes: [] },
    examples: [{ input: "digits = [1,2,3]", output: "[1,2,4]" }, { input: "digits = [9,9]", output: "[1,0,0]" }],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9"],
    starterCode: {
      javascript: `function plusOne(digits) {\n  // Write your solution here\n}\nconsole.log(plusOne([1,2,3]));\nconsole.log(plusOne([9,9]));`,
      python: `def plusOne(digits):\n    # Write your solution here\n    pass\nprint(plusOne([1,2,3]))\nprint(plusOne([9,9]))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] plusOne(int[] digits) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));\n        System.out.println(Arrays.toString(plusOne(new int[]{9,9})));\n    }\n}`
    },
    expectedOutput: { javascript: "[1,2,4]\n[1,0,0]", python: "[1, 2, 4]\n[1, 0, 0]", java: "[1, 2, 4]\n[1, 0, 0]" }
  },

  "single-number": {
    id: "single-number", title: "Single Number", difficulty: "Easy", category: "Array • Bit Manipulation",
    description: { text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", notes: ["You must implement a solution with O(1) extra space complexity."] },
    examples: [{ input: "nums = [2,2,1]", output: "1" }, { input: "nums = [4,1,2,1,2]", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 3 × 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}\nconsole.log(singleNumber([2,2,1]));\nconsole.log(singleNumber([4,1,2,1,2]));`,
      python: `def singleNumber(nums):\n    # Write your solution here\n    pass\nprint(singleNumber([2,2,1]))\nprint(singleNumber([4,1,2,1,2]))`,
      java: `class Solution {\n    public static int singleNumber(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(singleNumber(new int[]{2,2,1}));\n        System.out.println(singleNumber(new int[]{4,1,2,1,2}));\n    }\n}`
    },
    expectedOutput: { javascript: "1\n4", python: "1\n4", java: "1\n4" }
  },

  "find-minimum-rotated-sorted-array": {
    id: "find-minimum-rotated-sorted-array", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", category: "Array • Binary Search",
    description: { text: "Given the sorted rotated array nums of unique elements, return the minimum element of this array.", notes: ["You must write an algorithm that runs in O(log n) time."] },
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }, { input: "nums = [4,5,6,7,0,1,2]", output: "0" }],
    constraints: ["1 ≤ nums.length ≤ 5000", "All integers are unique"],
    starterCode: {
      javascript: `function findMin(nums) {\n  // Write your solution here\n}\nconsole.log(findMin([3,4,5,1,2]));\nconsole.log(findMin([4,5,6,7,0,1,2]));`,
      python: `def findMin(nums):\n    # Write your solution here\n    pass\nprint(findMin([3,4,5,1,2]))\nprint(findMin([4,5,6,7,0,1,2]))`,
      java: `class Solution {\n    public static int findMin(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(findMin(new int[]{3,4,5,1,2}));\n        System.out.println(findMin(new int[]{4,5,6,7,0,1,2}));\n    }\n}`
    },
    expectedOutput: { javascript: "1\n0", python: "1\n0", java: "1\n0" }
  },

  "coin-change": {
    id: "coin-change", title: "Coin Change", difficulty: "Medium", category: "Array • Dynamic Programming",
    description: { text: "You are given coins of different denominations and a total amount. Return the fewest number of coins needed to make up that amount. If not possible, return -1.", notes: ["You may assume infinite supply of each coin denomination."] },
    examples: [{ input: "coins = [1,5,10], amount = 12", output: "3", explanation: "12 = 10 + 1 + 1" }, { input: "coins = [2], amount = 3", output: "-1" }],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}\nconsole.log(coinChange([1,5,10], 12));\nconsole.log(coinChange([2], 3));`,
      python: `def coinChange(coins, amount):\n    # Write your solution here\n    pass\nprint(coinChange([1,5,10], 12))\nprint(coinChange([2], 3))`,
      java: `class Solution {\n    public static int coinChange(int[] coins, int amount) {\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(coinChange(new int[]{1,5,10}, 12));\n        System.out.println(coinChange(new int[]{2}, 3));\n    }\n}`
    },
    expectedOutput: { javascript: "3\n-1", python: "3\n-1", java: "3\n-1" }
  },

  "word-break": {
    id: "word-break", title: "Word Break", difficulty: "Medium", category: "String • Dynamic Programming • Trie",
    description: { text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.", notes: ["The same word may be reused multiple times."] },
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }, { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" }],
    constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your solution here\n}\nconsole.log(wordBreak("leetcode", ["leet","code"]));\nconsole.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));`,
      python: `def wordBreak(s, wordDict):\n    # Write your solution here\n    pass\nprint(wordBreak("leetcode", ["leet","code"]))\nprint(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))`,
      java: `import java.util.*;\nclass Solution {\n    public static boolean wordBreak(String s, List<String> wordDict) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(wordBreak("leetcode", Arrays.asList("leet","code")));\n        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat")));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse" }
  },

  "rotate-image": {
    id: "rotate-image", title: "Rotate Image", difficulty: "Medium", category: "Array • Matrix • Math",
    description: { text: "You are given an n × n 2D matrix representing an image, rotate the image by 90 degrees clockwise.", notes: ["You have to rotate the image in-place."] },
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20"],
    starterCode: {
      javascript: `function rotate(matrix) {\n  // Write your solution here\n}\nlet m=[[1,2,3],[4,5,6],[7,8,9]]; rotate(m); console.log(JSON.stringify(m));`,
      python: `def rotate(matrix):\n    # Write your solution here\n    pass\nm=[[1,2,3],[4,5,6],[7,8,9]]; rotate(m); print(m)`,
      java: `import java.util.*;\nclass Solution {\n    public static void rotate(int[][] matrix) {\n    }\n    public static void main(String[] args) {\n        int[][] m={{1,2,3},{4,5,6},{7,8,9}}; rotate(m); System.out.println(Arrays.deepToString(m));\n    }\n}`
    },
    expectedOutput: { javascript: "[[7,4,1],[8,5,2],[9,6,3]]", python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]" }
  },

  "spiral-matrix": {
    id: "spiral-matrix", title: "Spiral Matrix", difficulty: "Medium", category: "Array • Matrix • Simulation",
    description: { text: "Given an m × n matrix, return all elements of the matrix in spiral order.", notes: [] },
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }],
    constraints: ["1 ≤ m, n ≤ 10"],
    starterCode: {
      javascript: `function spiralOrder(matrix) {\n  // Write your solution here\n}\nconsole.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));`,
      python: `def spiralOrder(matrix):\n    # Write your solution here\n    pass\nprint(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<Integer> spiralOrder(int[][] matrix) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}}));\n    }\n}`
    },
    expectedOutput: { javascript: "[1,2,3,6,9,8,7,4,5]", python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]", java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]" }
  },

  "letter-combinations": {
    id: "letter-combinations", title: "Letter Combinations of a Phone Number", difficulty: "Medium", category: "String • Backtracking",
    description: { text: "Given a string containing digits from 2-9, return all possible letter combinations that the number could represent.", notes: ["Mapping: 2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz"] },
    examples: [{ input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' }, { input: 'digits = ""', output: "[]" }],
    constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is between '2' and '9'"],
    starterCode: {
      javascript: `function letterCombinations(digits) {\n  // Write your solution here\n}\nconsole.log(letterCombinations("23"));\nconsole.log(letterCombinations(""));`,
      python: `def letterCombinations(digits):\n    # Write your solution here\n    pass\nprint(letterCombinations("23"))\nprint(letterCombinations(""))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<String> letterCombinations(String digits) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(letterCombinations("23"));\n        System.out.println(letterCombinations(""));\n    }\n}`
    },
    expectedOutput: { javascript: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]', python: "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']\n[]", java: "[ad, ae, af, bd, be, bf, cd, ce, cf]\n[]" }
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array", title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Array • Binary Search",
    description: { text: "Given an integer array nums sorted in ascending order (with distinct values) that is possibly rotated, and a target value, return the index of target, or -1 if not found.", notes: ["You must write an algorithm with O(log n) runtime."] },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }, { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" }],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\nconsole.log(search([4,5,6,7,0,1,2], 0));\nconsole.log(search([4,5,6,7,0,1,2], 3));`,
      python: `def search(nums, target):\n    # Write your solution here\n    pass\nprint(search([4,5,6,7,0,1,2], 0))\nprint(search([4,5,6,7,0,1,2], 3))`,
      java: `class Solution {\n    public static int search(int[] nums, int target) {\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));\n    }\n}`
    },
    expectedOutput: { javascript: "4\n-1", python: "4\n-1", java: "4\n-1" }
  },

  "number-of-islands": {
    id: "number-of-islands", title: "Number of Islands", difficulty: "Medium", category: "Array • DFS • BFS • Matrix",
    description: { text: "Given an m x n 2D grid map of '1's (land) and '0's (water), return the number of islands.", notes: ["An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically."] },
    examples: [{ input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: "3" }],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300"],
    starterCode: {
      javascript: `function numIslands(grid) {\n  // Write your solution here\n}\nconsole.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));`,
      python: `def numIslands(grid):\n    # Write your solution here\n    pass\nprint(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))`,
      java: `class Solution {\n    public static int numIslands(char[][] grid) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(numIslands(new char[][]{{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}}));\n    }\n}`
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" }
  },

  "house-robber": {
    id: "house-robber", title: "House Robber", difficulty: "Medium", category: "Array • Dynamic Programming",
    description: { text: "You are a robber planning to rob houses along a street. Each house has money stashed. Adjacent houses have security connected — if two adjacent houses are broken into, police will be alerted.", notes: ["Return the maximum amount of money you can rob without alerting police."] },
    examples: [{ input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (1) + house 3 (3) = 4" }, { input: "nums = [2,7,9,3,1]", output: "12" }],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {\n  // Write your solution here\n}\nconsole.log(rob([1,2,3,1]));\nconsole.log(rob([2,7,9,3,1]));`,
      python: `def rob(nums):\n    # Write your solution here\n    pass\nprint(rob([1,2,3,1]))\nprint(rob([2,7,9,3,1]))`,
      java: `class Solution {\n    public static int rob(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(rob(new int[]{1,2,3,1}));\n        System.out.println(rob(new int[]{2,7,9,3,1}));\n    }\n}`
    },
    expectedOutput: { javascript: "4\n12", python: "4\n12", java: "4\n12" }
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring", title: "Longest Palindromic Substring", difficulty: "Medium", category: "String • Dynamic Programming",
    description: { text: "Given a string s, return the longest palindromic substring in s.", notes: [] },
    examples: [{ input: 's = "babad"', output: '"bab"', explanation: '"aba" is also accepted.' }, { input: 's = "cbbd"', output: '"bb"' }],
    constraints: ["1 ≤ s.length ≤ 1000"],
    starterCode: {
      javascript: `function longestPalindrome(s) {\n  // Write your solution here\n}\nconsole.log(longestPalindrome("babad"));\nconsole.log(longestPalindrome("cbbd"));`,
      python: `def longestPalindrome(s):\n    # Write your solution here\n    pass\nprint(longestPalindrome("babad"))\nprint(longestPalindrome("cbbd"))`,
      java: `class Solution {\n    public static String longestPalindrome(String s) {\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(longestPalindrome("babad"));\n        System.out.println(longestPalindrome("cbbd"));\n    }\n}`
    },
    expectedOutput: { javascript: "bab\nbb", python: "bab\nbb", java: "bab\nbb" }
  },

  "decode-ways": {
    id: "decode-ways", title: "Decode Ways", difficulty: "Medium", category: "String • Dynamic Programming",
    description: { text: "A message containing letters A-Z can be encoded as numbers 1-26. Given a string s containing only digits, return the number of ways to decode it.", notes: [] },
    examples: [{ input: 's = "12"', output: "2", explanation: "It could be AB (1 2) or L (12)." }, { input: 's = "226"', output: "3" }],
    constraints: ["1 ≤ s.length ≤ 100"],
    starterCode: {
      javascript: `function numDecodings(s) {\n  // Write your solution here\n}\nconsole.log(numDecodings("12"));\nconsole.log(numDecodings("226"));`,
      python: `def numDecodings(s):\n    # Write your solution here\n    pass\nprint(numDecodings("12"))\nprint(numDecodings("226"))`,
      java: `class Solution {\n    public static int numDecodings(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(numDecodings("12"));\n        System.out.println(numDecodings("226"));\n    }\n}`
    },
    expectedOutput: { javascript: "2\n3", python: "2\n3", java: "2\n3" }
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes", title: "Set Matrix Zeroes", difficulty: "Medium", category: "Array • Matrix • Hash Table",
    description: { text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.", notes: ["You must do it in place."] },
    examples: [{ input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
    constraints: ["1 ≤ m, n ≤ 200"],
    starterCode: {
      javascript: `function setZeroes(matrix) {\n  // Write your solution here\n}\nlet m=[[1,1,1],[1,0,1],[1,1,1]]; setZeroes(m); console.log(JSON.stringify(m));`,
      python: `def setZeroes(matrix):\n    # Write your solution here\n    pass\nm=[[1,1,1],[1,0,1],[1,1,1]]; setZeroes(m); print(m)`,
      java: `import java.util.*;\nclass Solution {\n    public static void setZeroes(int[][] matrix) {\n    }\n    public static void main(String[] args) {\n        int[][] m={{1,1,1},{1,0,1},{1,1,1}}; setZeroes(m); System.out.println(Arrays.deepToString(m));\n    }\n}`
    },
    expectedOutput: { javascript: "[[1,0,1],[0,0,0],[1,0,1]]", python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]", java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]" }
  },

  "trapping-rain-water": {
    id: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", category: "Array • Two Pointers • Stack",
    description: { text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.", notes: [] },
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }, { input: "height = [4,2,0,3,2,5]", output: "9" }],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 × 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your solution here\n}\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));\nconsole.log(trap([4,2,0,3,2,5]));`,
      python: `def trap(height):\n    # Write your solution here\n    pass\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))\nprint(trap([4,2,0,3,2,5]))`,
      java: `class Solution {\n    public static int trap(int[] height) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));\n        System.out.println(trap(new int[]{4,2,0,3,2,5}));\n    }\n}`
    },
    expectedOutput: { javascript: "6\n9", python: "6\n9", java: "6\n9" }
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", category: "Array • Binary Search • Divide and Conquer",
    description: { text: "Given two sorted arrays nums1 and nums2 of size m and n, return the median of the two sorted arrays.", notes: ["The overall run time complexity should be O(log (m+n))."] },
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.0" }, { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" }],
    constraints: ["0 ≤ m, n ≤ 1000", "1 ≤ m + n ≤ 2000"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n}\nconsole.log(findMedianSortedArrays([1,3], [2]));\nconsole.log(findMedianSortedArrays([1,2], [3,4]));`,
      python: `def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass\nprint(findMedianSortedArrays([1,3], [2]))\nprint(findMedianSortedArrays([1,2], [3,4]))`,
      java: `class Solution {\n    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        return 0.0;\n    }\n    public static void main(String[] args) {\n        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));\n        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));\n    }\n}`
    },
    expectedOutput: { javascript: "2\n2.5", python: "2.0\n2.5", java: "2.0\n2.5" }
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists", title: "Merge k Sorted Lists", difficulty: "Hard", category: "Linked List • Divide and Conquer • Heap",
    description: { text: "You are given an array of k linked-lists, each sorted in ascending order. Merge all into one sorted linked-list.", notes: [] },
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }],
    constraints: ["0 ≤ k ≤ 10⁴", "0 ≤ list length ≤ 500"],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Using arrays for simplicity\n}\nconsole.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));`,
      python: `def mergeKLists(lists):\n    # Using arrays for simplicity\n    pass\nprint(mergeKLists([[1,4,5],[1,3,4],[2,6]]))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] mergeKLists(int[][] lists) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(mergeKLists(new int[][]{{1,4,5},{1,3,4},{2,6}})));\n    }\n}`
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4,5,6]", python: "[1, 1, 2, 3, 4, 4, 5, 6]", java: "[1, 1, 2, 3, 4, 4, 5, 6]" }
  },

  "minimum-window-substring": {
    id: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", category: "String • Sliding Window • Hash Table",
    description: { text: "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.", notes: ["If there is no such substring, return empty string."] },
    examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }, { input: 's = "a", t = "aa"', output: '""' }],
    constraints: ["1 ≤ s.length, t.length ≤ 10⁵"],
    starterCode: {
      javascript: `function minWindow(s, t) {\n  // Write your solution here\n}\nconsole.log(minWindow("ADOBECODEBANC", "ABC"));\nconsole.log(minWindow("a", "aa"));`,
      python: `def minWindow(s, t):\n    # Write your solution here\n    pass\nprint(minWindow("ADOBECODEBANC", "ABC"))\nprint(minWindow("a", "aa"))`,
      java: `class Solution {\n    public static String minWindow(String s, String t) {\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(minWindow("ADOBECODEBANC", "ABC"));\n        System.out.println(minWindow("a", "aa"));\n    }\n}`
    },
    expectedOutput: { javascript: "BANC\n", python: "BANC\n", java: "BANC\n" }
  },

  "power-of-two": {
    id: "power-of-two", title: "Power of Two", difficulty: "Easy", category: "Math • Bit Manipulation",
    description: { text: "Given an integer n, return true if it is a power of two. Otherwise, return false.", notes: [] },
    examples: [{ input: "n = 1", output: "true" }, { input: "n = 16", output: "true" }, { input: "n = 3", output: "false" }],
    constraints: ["-2³¹ ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {\n  // Write your solution here\n}\nconsole.log(isPowerOfTwo(1));\nconsole.log(isPowerOfTwo(16));\nconsole.log(isPowerOfTwo(3));`,
      python: `def isPowerOfTwo(n):\n    # Write your solution here\n    pass\nprint(isPowerOfTwo(1))\nprint(isPowerOfTwo(16))\nprint(isPowerOfTwo(3))`,
      java: `class Solution {\n    public static boolean isPowerOfTwo(int n) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPowerOfTwo(1));\n        System.out.println(isPowerOfTwo(16));\n        System.out.println(isPowerOfTwo(3));\n    }\n}`
    },
    expectedOutput: { javascript: "true\ntrue\nfalse", python: "True\nTrue\nFalse", java: "true\ntrue\nfalse" }
  },

  "majority-element": {
    id: "majority-element", title: "Majority Element", difficulty: "Easy", category: "Array • Hash Table • Sorting",
    description: { text: "Given an array nums of size n, return the majority element. The majority element appears more than ⌊n / 2⌋ times.", notes: ["You may assume the majority element always exists."] },
    examples: [{ input: "nums = [3,2,3]", output: "3" }, { input: "nums = [2,2,1,1,1,2,2]", output: "2" }],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5 × 10⁴"],
    starterCode: {
      javascript: `function majorityElement(nums) {\n  // Write your solution here\n}\nconsole.log(majorityElement([3,2,3]));\nconsole.log(majorityElement([2,2,1,1,1,2,2]));`,
      python: `def majorityElement(nums):\n    # Write your solution here\n    pass\nprint(majorityElement([3,2,3]))\nprint(majorityElement([2,2,1,1,1,2,2]))`,
      java: `class Solution {\n    public static int majorityElement(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(majorityElement(new int[]{3,2,3}));\n        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));\n    }\n}`
    },
    expectedOutput: { javascript: "3\n2", python: "3\n2", java: "3\n2" }
  },

  "missing-number": {
    id: "missing-number", title: "Missing Number", difficulty: "Easy", category: "Array • Math • Bit Manipulation",
    description: { text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.", notes: [] },
    examples: [{ input: "nums = [3,0,1]", output: "2" }, { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" }],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function missingNumber(nums) {\n  // Write your solution here\n}\nconsole.log(missingNumber([3,0,1]));\nconsole.log(missingNumber([9,6,4,2,3,5,7,0,1]));`,
      python: `def missingNumber(nums):\n    # Write your solution here\n    pass\nprint(missingNumber([3,0,1]))\nprint(missingNumber([9,6,4,2,3,5,7,0,1]))`,
      java: `class Solution {\n    public static int missingNumber(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(missingNumber(new int[]{3,0,1}));\n        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));\n    }\n}`
    },
    expectedOutput: { javascript: "2\n8", python: "2\n8", java: "2\n8" }
  },

  "palindrome-number": {
    id: "palindrome-number", title: "Palindrome Number", difficulty: "Easy", category: "Math",
    description: { text: "Given an integer x, return true if x is a palindrome, and false otherwise.", notes: [] },
    examples: [{ input: "x = 121", output: "true" }, { input: "x = -121", output: "false" }, { input: "x = 10", output: "false" }],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Write your solution here\n}\nconsole.log(isPalindrome(121));\nconsole.log(isPalindrome(-121));\nconsole.log(isPalindrome(10));`,
      python: `def isPalindrome(x):\n    # Write your solution here\n    pass\nprint(isPalindrome(121))\nprint(isPalindrome(-121))\nprint(isPalindrome(10))`,
      java: `class Solution {\n    public static boolean isPalindrome(int x) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPalindrome(121));\n        System.out.println(isPalindrome(-121));\n        System.out.println(isPalindrome(10));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse\nfalse", python: "True\nFalse\nFalse", java: "true\nfalse\nfalse" }
  },

  "unique-paths": {
    id: "unique-paths", title: "Unique Paths", difficulty: "Medium", category: "Math • Dynamic Programming",
    description: { text: "A robot is on an m x n grid. The robot can only move either down or right. How many unique paths are there from top-left to bottom-right?", notes: [] },
    examples: [{ input: "m = 3, n = 7", output: "28" }, { input: "m = 3, n = 2", output: "3" }],
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {\n  // Write your solution here\n}\nconsole.log(uniquePaths(3, 7));\nconsole.log(uniquePaths(3, 2));`,
      python: `def uniquePaths(m, n):\n    # Write your solution here\n    pass\nprint(uniquePaths(3, 7))\nprint(uniquePaths(3, 2))`,
      java: `class Solution {\n    public static int uniquePaths(int m, int n) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(uniquePaths(3, 7));\n        System.out.println(uniquePaths(3, 2));\n    }\n}`
    },
    expectedOutput: { javascript: "28\n3", python: "28\n3", java: "28\n3" }
  },

  "jump-game": {
    id: "jump-game", title: "Jump Game", difficulty: "Medium", category: "Array • Greedy • Dynamic Programming",
    description: { text: "You are given an integer array nums. You are initially at the first index, and each element represents your maximum jump length. Return true if you can reach the last index.", notes: [] },
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }, { input: "nums = [3,2,1,0,4]", output: "false" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {\n  // Write your solution here\n}\nconsole.log(canJump([2,3,1,1,4]));\nconsole.log(canJump([3,2,1,0,4]));`,
      python: `def canJump(nums):\n    # Write your solution here\n    pass\nprint(canJump([2,3,1,1,4]))\nprint(canJump([3,2,1,0,4]))`,
      java: `class Solution {\n    public static boolean canJump(int[] nums) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(canJump(new int[]{2,3,1,1,4}));\n        System.out.println(canJump(new int[]{3,2,1,0,4}));\n    }\n}`
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse" }
  },

  "subsets": {
    id: "subsets", title: "Subsets", difficulty: "Medium", category: "Array • Backtracking • Bit Manipulation",
    description: { text: "Given an integer array nums of unique elements, return all possible subsets (the power set).", notes: ["The solution must not contain duplicate subsets."] },
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function subsets(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(subsets([1,2,3])));`,
      python: `def subsets(nums):\n    # Write your solution here\n    pass\nprint(subsets([1,2,3]))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<List<Integer>> subsets(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(subsets(new int[]{1,2,3}));\n    }\n}`
    },
    expectedOutput: { javascript: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", python: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]", java: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]" }
  },

  "permutations": {
    id: "permutations", title: "Permutations", difficulty: "Medium", category: "Array • Backtracking",
    description: { text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.", notes: [] },
    examples: [{ input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function permute(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(permute([1,2,3])));`,
      python: `def permute(nums):\n    # Write your solution here\n    pass\nprint(permute([1,2,3]))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<List<Integer>> permute(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(permute(new int[]{1,2,3}));\n    }\n}`
    },
    expectedOutput: { javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]", python: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]", java: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]" }
  },

  "combination-sum": {
    id: "combination-sum", title: "Combination Sum", difficulty: "Medium", category: "Array • Backtracking",
    description: { text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target.", notes: ["The same number may be chosen unlimited times."] },
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" }],
    constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(combinationSum([2,3,6,7], 7)));`,
      python: `def combinationSum(candidates, target):\n    # Write your solution here\n    pass\nprint(combinationSum([2,3,6,7], 7))`,
      java: `import java.util.*;\nclass Solution {\n    public static List<List<Integer>> combinationSum(int[] candidates, int target) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));\n    }\n}`
    },
    expectedOutput: { javascript: "[[2,2,3],[7]]", python: "[[2, 2, 3], [7]]", java: "[[2, 2, 3], [7]]" }
  },
};

export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
};
