export const EASY_PROBLEMS_1 = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    order: 1,
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: ["Each input has exactly one solution.", "You may not use the same element twice."],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

int main() {
    int returnSize;
    int nums1[] = {2,7,11,15};
    int* r1 = twoSum(nums1, 4, 9, &returnSize);
    if(r1) { printf("[%d,%d]\\n", r1[0], r1[1]); free(r1); }
    int nums2[] = {3,2,4};
    int* r2 = twoSum(nums2, 3, 6, &returnSize);
    if(r2) { printf("[%d,%d]\\n", r2[0], r2[1]); free(r2); }
    int nums3[] = {3,3};
    int* r3 = twoSum(nums3, 2, 6, &returnSize);
    if(r3) { printf("[%d,%d]\\n", r3[0], r3[1]); free(r3); }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> n1 = {2,7,11,15};
    auto r1 = twoSum(n1, 9);
    cout << "[" << r1[0] << "," << r1[1] << "]" << endl;
    vector<int> n2 = {3,2,4};
    auto r2 = twoSum(n2, 6);
    cout << "[" << r2[0] << "," << r2[1] << "]" << endl;
    vector<int> n3 = {3,3};
    auto r3 = twoSum(n3, 6);
    cout << "[" << r3[0] << "," << r3[1] << "]" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0,1]\n[1,2]\n[0,1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
    },
    hiddenTests: {
      javascript: { code: `console.log(JSON.stringify(twoSum([1,5,3,7], 8)));console.log(JSON.stringify(twoSum([0,4,3,0], 0)));`, expected: "[0,3]\n[0,3]" },
      python: { code: `print(twoSum([1,5,3,7], 8))\nprint(twoSum([0,4,3,0], 0))`, expected: "[0, 3]\n[0, 3]" },
      java: { code: `System.out.println(Arrays.toString(twoSum(new int[]{1,5,3,7}, 8)));System.out.println(Arrays.toString(twoSum(new int[]{0,4,3,0}, 0)));`, expected: "[0, 3]\n[0, 3]" },
      c: { code: `int n4[]={1,5,3,7};int*r4=twoSum(n4,4,8,&returnSize);if(r4){printf("[%d,%d]\\n",r4[0],r4[1]);free(r4);}int n5[]={0,4,3,0};int*r5=twoSum(n5,4,0,&returnSize);if(r5){printf("[%d,%d]\\n",r5[0],r5[1]);free(r5);}`, expected: "[0,3]\n[0,3]" },
      cpp: { code: `vector<int> n4={1,5,3,7};auto r4=twoSum(n4,8);cout<<"["<<r4[0]<<","<<r4[1]<<"]"<<endl;vector<int> n5={0,4,3,0};auto r5=twoSum(n5,0);cout<<"["<<r5[0]<<","<<r5[1]<<"]"<<endl;`, expected: "[0,3]\n[0,3]" },
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    order: 2,
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
}

let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1);
let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2);`,
      python: `def reverseString(s):
    # Write your solution here
    pass

test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)
test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[] t1 = {'h','e','l','l','o'};
        reverseString(t1);
        System.out.println(Arrays.toString(t1));
        char[] t2 = {'H','a','n','n','a','h'};
        reverseString(t2);
        System.out.println(Arrays.toString(t2));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
}

int main() {
    char t1[] = {'h','e','l','l','o'};
    reverseString(t1, 5);
    printf("[");
    for(int i=0;i<5;i++){if(i)printf(",");printf("%c",t1[i]);}
    printf("]\\n");
    char t2[] = {'H','a','n','n','a','h'};
    reverseString(t2, 6);
    printf("[");
    for(int i=0;i<6;i++){if(i)printf(",");printf("%c",t2[i]);}
    printf("]\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<char> t1 = {'h','e','l','l','o'};
    reverseString(t1);
    cout << "[";
    for(int i=0;i<t1.size();i++){if(i)cout<<",";cout<<t1[i];}
    cout << "]" << endl;
    vector<char> t2 = {'H','a','n','n','a','h'};
    reverseString(t2);
    cout << "[";
    for(int i=0;i<t2.size();i++){if(i)cout<<",";cout<<t2[i];}
    cout << "]" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[ "o", "l", "l", "e", "h" ]\n[ "h", "a", "n", "n", "a", "H" ]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      c: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
      cpp: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
    },
    hiddenTests: {
      javascript: { code: `let t3=["a","b","c"];reverseString(t3);console.log(t3);`, expected: '[ "c", "b", "a" ]' },
      python: { code: `t3=["a","b","c"]\nreverseString(t3)\nprint(t3)`, expected: "['c', 'b', 'a']" },
      java: { code: `char[] t3={'a','b','c'};reverseString(t3);System.out.println(Arrays.toString(t3));`, expected: "[c, b, a]" },
      c: { code: `char t3[]={'a','b','c'};reverseString(t3,3);printf("[");for(int i=0;i<3;i++){if(i)printf(",");printf("%c",t3[i]);}printf("]\\n");`, expected: "[c,b,a]" },
      cpp: { code: `vector<char> t3={'a','b','c'};reverseString(t3);cout<<"[";for(int i=0;i<t3.size();i++){if(i)cout<<",";cout<<t3[i];}cout<<"]"<<endl;`, expected: "[c,b,a]" },
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    order: 3,
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: ["An integer is a palindrome when it reads the same forward and backward."],
    },
    examples: [
      { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
      { input: "x = -121", output: "false" },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));`,
      python: `def isPalindrome(x):
    # Write your solution here
    pass

print(isPalindrome(121))
print(isPalindrome(-121))
print(isPalindrome(10))`,
      java: `class Solution {
    public static boolean isPalindrome(int x) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));
        System.out.println(isPalindrome(-121));
        System.out.println(isPalindrome(10));
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isPalindrome(121) ? "true" : "false");
    printf("%s\\n", isPalindrome(-121) ? "true" : "false");
    printf("%s\\n", isPalindrome(10) ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome(121) ? "true" : "false") << endl;
    cout << (isPalindrome(-121) ? "true" : "false") << endl;
    cout << (isPalindrome(10) ? "true" : "false") << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
      c: "true\nfalse\nfalse",
      cpp: "true\nfalse\nfalse",
    },
    hiddenTests: {
      javascript: { code: `console.log(isPalindrome(12321));console.log(isPalindrome(0));`, expected: "true\ntrue" },
      python: { code: `print(isPalindrome(12321))\nprint(isPalindrome(0))`, expected: "True\nTrue" },
      java: { code: `System.out.println(isPalindrome(12321));System.out.println(isPalindrome(0));`, expected: "true\ntrue" },
      c: { code: `printf("%s\\n",isPalindrome(12321)?"true":"false");printf("%s\\n",isPalindrome(0)?"true":"false");`, expected: "true\ntrue" },
      cpp: { code: `cout<<(isPalindrome(12321)?"true":"false")<<endl;cout<<(isPalindrome(0)?"true":"false")<<endl;`, expected: "true\ntrue" },
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    order: 4,
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool isPalindrome(char* s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false");
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false");
    printf("%s\\n", isPalindrome(" ") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    cout << (isPalindrome("race a car") ? "true" : "false") << endl;
    cout << (isPalindrome(" ") ? "true" : "false") << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
    hiddenTests: {
      javascript: { code: `console.log(isPalindrome("Was it a car or a cat I saw?"));`, expected: "true" },
      python: { code: `print(isPalindrome("Was it a car or a cat I saw?"))`, expected: "True" },
      java: { code: `System.out.println(isPalindrome("Was it a car or a cat I saw?"));`, expected: "true" },
      c: { code: `printf("%s\\n",isPalindrome("Was it a car or a cat I saw?")?"true":"false");`, expected: "true" },
      cpp: { code: `cout<<(isPalindrome("Was it a car or a cat I saw?")?"true":"false")<<endl;`, expected: "true" },
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "Math • String",
    order: 5,
    description: {
      text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
      notes: [],
    },
    examples: [
      { input: 's = "III"', output: "3" },
      { input: 's = "LVIII"', output: "58" },
      { input: 's = "MCMXCIV"', output: "1994" },
    ],
    constraints: ["1 ≤ s.length ≤ 15", "s contains only characters: I, V, X, L, C, D, M"],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));`,
      python: `def romanToInt(s):
    # Write your solution here
    pass

print(romanToInt("III"))
print(romanToInt("LVIII"))
print(romanToInt("MCMXCIV"))`,
      java: `class Solution {
    public static int romanToInt(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("III"));
        System.out.println(romanToInt("LVIII"));
        System.out.println(romanToInt("MCMXCIV"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int romanToInt(char* s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", romanToInt("III"));
    printf("%d\\n", romanToInt("LVIII"));
    printf("%d\\n", romanToInt("MCMXCIV"));
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int romanToInt(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << romanToInt("III") << endl;
    cout << romanToInt("LVIII") << endl;
    cout << romanToInt("MCMXCIV") << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "3\n58\n1994", python: "3\n58\n1994", java: "3\n58\n1994", c: "3\n58\n1994", cpp: "3\n58\n1994" },
    hiddenTests: {
      javascript: { code: `console.log(romanToInt("IV"));console.log(romanToInt("IX"));`, expected: "4\n9" },
      python: { code: `print(romanToInt("IV"))\nprint(romanToInt("IX"))`, expected: "4\n9" },
      java: { code: `System.out.println(romanToInt("IV"));System.out.println(romanToInt("IX"));`, expected: "4\n9" },
      c: { code: `printf("%d\\n",romanToInt("IV"));printf("%d\\n",romanToInt("IX"));`, expected: "4\n9" },
      cpp: { code: `cout<<romanToInt("IV")<<endl;cout<<romanToInt("IX")<<endl;`, expected: "4\n9" },
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String",
    order: 6,
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
      notes: [],
    },
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

print(longestCommonPrefix(["flower","flow","flight"]))
print(longestCommonPrefix(["dog","racecar","car"]))`,
      java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"}));
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"}));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    // Write your solution here (return static or malloc'd string)
    static char result[201];
    result[0] = '\\0';
    return result;
}

int main() {
    char* s1[] = {"flower","flow","flight"};
    printf("%s\\n", longestCommonPrefix(s1, 3));
    char* s2[] = {"dog","racecar","car"};
    printf("%s\\n", longestCommonPrefix(s2, 3));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    return "";
}

int main() {
    vector<string> s1 = {"flower","flow","flight"};
    cout << longestCommonPrefix(s1) << endl;
    vector<string> s2 = {"dog","racecar","car"};
    cout << longestCommonPrefix(s2) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "fl\n", python: "fl\nNone", java: "fl\n", c: "fl\n", cpp: "fl\n" },
    hiddenTests: {
      javascript: { code: `console.log(longestCommonPrefix(["a"]));console.log(longestCommonPrefix(["",""]))`, expected: "a\n" },
      python: { code: `print(longestCommonPrefix(["a"]))\nprint(longestCommonPrefix(["",""]))`, expected: "a\n" },
      java: { code: `System.out.println(longestCommonPrefix(new String[]{"a"}));System.out.println(longestCommonPrefix(new String[]{"",""}));`, expected: "a\n" },
      c: { code: `char*s3[]={"a"};printf("%s\\n",longestCommonPrefix(s3,1));char*s4[]={"",""};printf("%s\\n",longestCommonPrefix(s4,2));`, expected: "a\n" },
      cpp: { code: `vector<string> s3={"a"};cout<<longestCommonPrefix(s3)<<endl;vector<string> s4={"",""};cout<<longestCommonPrefix(s4)<<endl;`, expected: "a\n" },
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    order: 7,
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: ["Open brackets must be closed by the same type.", "Open brackets must be closed in the correct order."],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isValid("()") ? "true" : "false");
    printf("%s\\n", isValid("()[]{}") ? "true" : "false");
    printf("%s\\n", isValid("(]") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isValid("()") ? "true" : "false") << endl;
    cout << (isValid("()[]{}") ? "true" : "false") << endl;
    cout << (isValid("(]") ? "true" : "false") << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "true\ntrue\nfalse", python: "True\nTrue\nFalse", java: "true\ntrue\nfalse", c: "true\ntrue\nfalse", cpp: "true\ntrue\nfalse" },
    hiddenTests: {
      javascript: { code: `console.log(isValid("([)]"));console.log(isValid("{[]}"));`, expected: "false\ntrue" },
      python: { code: `print(isValid("([)]"))\nprint(isValid("{[]}"))`, expected: "False\nTrue" },
      java: { code: `System.out.println(isValid("([)]"));System.out.println(isValid("{[]}"));`, expected: "false\ntrue" },
      c: { code: `printf("%s\\n",isValid("([)]")?"true":"false");printf("%s\\n",isValid("{[]}")?"true":"false");`, expected: "false\ntrue" },
      cpp: { code: `cout<<(isValid("([)]")?"true":"false")<<endl;cout<<(isValid("{[]}")?"true":"false")<<endl;`, expected: "false\ntrue" },
    },
  },

  "remove-duplicates": {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    order: 8,
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5, nums = [0,1,2,3,4,_,_,_,_,_]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
}

let n1 = [1,1,2];
console.log(removeDuplicates(n1));
let n2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(n2));`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

n1 = [1,1,2]
print(removeDuplicates(n1))
n2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(n2))`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{1,1,2}));
        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4}));
    }
}`,
      c: `#include <stdio.h>

int removeDuplicates(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {1,1,2};
    printf("%d\\n", removeDuplicates(n1, 3));
    int n2[] = {0,0,1,1,1,2,2,3,3,4};
    printf("%d\\n", removeDuplicates(n2, 10));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {1,1,2};
    cout << removeDuplicates(n1) << endl;
    vector<int> n2 = {0,0,1,1,1,2,2,3,3,4};
    cout << removeDuplicates(n2) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "2\n5", python: "2\n5", java: "2\n5", c: "2\n5", cpp: "2\n5" },
    hiddenTests: {
      javascript: { code: `console.log(removeDuplicates([1]));console.log(removeDuplicates([1,2,3]));`, expected: "1\n3" },
      python: { code: `print(removeDuplicates([1]))\nprint(removeDuplicates([1,2,3]))`, expected: "1\n3" },
      java: { code: `System.out.println(removeDuplicates(new int[]{1}));System.out.println(removeDuplicates(new int[]{1,2,3}));`, expected: "1\n3" },
      c: { code: `int a[]={1};printf("%d\\n",removeDuplicates(a,1));int b[]={1,2,3};printf("%d\\n",removeDuplicates(b,3));`, expected: "1\n3" },
      cpp: { code: `vector<int> a={1};cout<<removeDuplicates(a)<<endl;vector<int> b={1,2,3};cout<<removeDuplicates(b)<<endl;`, expected: "1\n3" },
    },
  },

  "search-insert-position": {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: "Array • Binary Search",
    order: 9,
    description: {
      text: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be inserted.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [1,3,5,6], target = 5", output: "2" },
      { input: "nums = [1,3,5,6], target = 2", output: "1" },
      { input: "nums = [1,3,5,6], target = 7", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
  // Write your solution here
}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));`,
      python: `def searchInsert(nums, target):
    # Write your solution here
    pass

print(searchInsert([1,3,5,6], 5))
print(searchInsert([1,3,5,6], 2))
print(searchInsert([1,3,5,6], 7))`,
      java: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6}, 5));
        System.out.println(searchInsert(new int[]{1,3,5,6}, 2));
        System.out.println(searchInsert(new int[]{1,3,5,6}, 7));
    }
}`,
      c: `#include <stdio.h>

int searchInsert(int* nums, int numsSize, int target) {
    // Write your solution here
    return 0;
}

int main() {
    int n[] = {1,3,5,6};
    printf("%d\\n", searchInsert(n, 4, 5));
    printf("%d\\n", searchInsert(n, 4, 2));
    printf("%d\\n", searchInsert(n, 4, 7));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int searchInsert(vector<int>& nums, int target) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n = {1,3,5,6};
    cout << searchInsert(n, 5) << endl;
    cout << searchInsert(n, 2) << endl;
    cout << searchInsert(n, 7) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "2\n1\n4", python: "2\n1\n4", java: "2\n1\n4", c: "2\n1\n4", cpp: "2\n1\n4" },
    hiddenTests: {
      javascript: { code: `console.log(searchInsert([1,3,5,6], 0));`, expected: "0" },
      python: { code: `print(searchInsert([1,3,5,6], 0))`, expected: "0" },
      java: { code: `System.out.println(searchInsert(new int[]{1,3,5,6}, 0));`, expected: "0" },
      c: { code: `int x[]={1,3,5,6};printf("%d\\n",searchInsert(x,4,0));`, expected: "0" },
      cpp: { code: `vector<int> x={1,3,5,6};cout<<searchInsert(x,0)<<endl;`, expected: "0" },
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    order: 10,
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "1+1 or 2" },
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))
print(climbStairs(3))
print(climbStairs(5))`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
        System.out.println(climbStairs(5));
    }
}`,
      c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", climbStairs(2));
    printf("%d\\n", climbStairs(3));
    printf("%d\\n", climbStairs(5));
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
    cout << climbStairs(5) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "2\n3\n8", python: "2\n3\n8", java: "2\n3\n8", c: "2\n3\n8", cpp: "2\n3\n8" },
    hiddenTests: {
      javascript: { code: `console.log(climbStairs(1));console.log(climbStairs(10));`, expected: "1\n89" },
      python: { code: `print(climbStairs(1))\nprint(climbStairs(10))`, expected: "1\n89" },
      java: { code: `System.out.println(climbStairs(1));System.out.println(climbStairs(10));`, expected: "1\n89" },
      c: { code: `printf("%d\\n",climbStairs(1));printf("%d\\n",climbStairs(10));`, expected: "1\n89" },
      cpp: { code: `cout<<climbStairs(1)<<endl;cout<<climbStairs(10)<<endl;`, expected: "1\n89" },
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Bit Manipulation",
    order: 11,
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["You must implement a solution with linear runtime and without using extra memory."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

print(singleNumber([2,2,1]))
print(singleNumber([4,1,2,1,2]))
print(singleNumber([1]))`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));
        System.out.println(singleNumber(new int[]{1}));
    }
}`,
      c: `#include <stdio.h>

int singleNumber(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {2,2,1};
    printf("%d\\n", singleNumber(n1, 3));
    int n2[] = {4,1,2,1,2};
    printf("%d\\n", singleNumber(n2, 5));
    int n3[] = {1};
    printf("%d\\n", singleNumber(n3, 1));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,2,1};
    cout << singleNumber(n1) << endl;
    vector<int> n2 = {4,1,2,1,2};
    cout << singleNumber(n2) << endl;
    vector<int> n3 = {1};
    cout << singleNumber(n3) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "1\n4\n1", python: "1\n4\n1", java: "1\n4\n1", c: "1\n4\n1", cpp: "1\n4\n1" },
    hiddenTests: {
      javascript: { code: `console.log(singleNumber([5,3,5]));`, expected: "3" },
      python: { code: `print(singleNumber([5,3,5]))`, expected: "3" },
      java: { code: `System.out.println(singleNumber(new int[]{5,3,5}));`, expected: "3" },
      c: { code: `int h[]={5,3,5};printf("%d\\n",singleNumber(h,3));`, expected: "3" },
      cpp: { code: `vector<int> h={5,3,5};cout<<singleNumber(h)<<endl;`, expected: "3" },
    },
  },

  "best-time-to-buy-sell-stock": {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    order: 12,
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve.",
      notes: [],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1), sell on day 5 (price=6)" },
      { input: "prices = [7,6,4,3,1]", output: "0" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
    }
}`,
      c: `#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(p1, 6));
    int p2[] = {7,6,4,3,1};
    printf("%d\\n", maxProfit(p2, 5));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    cout << maxProfit(p1) << endl;
    vector<int> p2 = {7,6,4,3,1};
    cout << maxProfit(p2) << endl;
    return 0;
}`,
    },
    expectedOutput: { javascript: "5\n0", python: "5\n0", java: "5\n0", c: "5\n0", cpp: "5\n0" },
    hiddenTests: {
      javascript: { code: `console.log(maxProfit([2,4,1]));console.log(maxProfit([1,2]));`, expected: "2\n1" },
      python: { code: `print(maxProfit([2,4,1]))\nprint(maxProfit([1,2]))`, expected: "2\n1" },
      java: { code: `System.out.println(maxProfit(new int[]{2,4,1}));System.out.println(maxProfit(new int[]{1,2}));`, expected: "2\n1" },
      c: { code: `int a[]={2,4,1};printf("%d\\n",maxProfit(a,3));int b[]={1,2};printf("%d\\n",maxProfit(b,2));`, expected: "2\n1" },
      cpp: { code: `vector<int> a={2,4,1};cout<<maxProfit(a)<<endl;vector<int> b={1,2};cout<<maxProfit(b)<<endl;`, expected: "2\n1" },
    },
  },
};
