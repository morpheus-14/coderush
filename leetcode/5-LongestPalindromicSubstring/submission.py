# Question URL - https://leetcode.com/problems/longest-palindromic-substring/

from typing import List

class Solution:
    def longestPalindrome(self, s: str) -> str:
        current_length= 1
        max_length = 1

        left_idx= 0
        right_idx = 0
        current_subtr= []

        if len(s) == 0:
            return ("")
        final_substr=s[0]

        while left_idx < len(s) and right_idx < len(s) and left_idx <= right_idx:
            right_idx += 1
            current_subtr = s[left_idx:right_idx]
            current_length = right_idx-left_idx
            if current_subtr == current_subtr[::-1]:
                if max_length < current_length:
                    max_length = current_length
                    final_substr = current_subtr
            if right_idx == len(s):
                left_idx += 1
                right_idx = left_idx + max_length
                if right_idx> len(s)-1:
                    break

        return final_substr