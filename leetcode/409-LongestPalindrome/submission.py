# Question URL - https://leetcode.com/problems/longest-palindromic-substring/description/

class Solution:
    def longestPalindrome(self, s: str) -> int:
        char_dict = {}
        ans = 0
        for char in s:
            char_dict[char] = char_dict.get(char, 0) + 1
        for v in char_dict.values():
            if v >= 2: ans += (v // 2) * 2
        return ans + 1 if ans < len(s) else ans