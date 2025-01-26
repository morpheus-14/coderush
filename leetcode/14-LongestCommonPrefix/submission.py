# Question URL - https://leetcode.com/problems/longest-common-prefix/

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs_sort = sorted(strs)
        final = ""
        # Check only first and last cause string array has already been sorted alphabetically
        for idx, char in enumerate(strs_sort[0]):
            if strs_sort[-1][idx] == char:
                final += char
            else:
                break
        return final