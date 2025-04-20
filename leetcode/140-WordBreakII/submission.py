# Question URL - https://leetcode.com/problems/word-break-ii/description

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        return self.findWords(s, 0, {value: 1 for value in wordDict})


    def findWords(self, s: str, start: int, words) -> List[str]:
        ans = []
        if start == len(s): ans.append("")
        else:
            for end in range(start + 1, len(s) + 1):
                prefix = s[start:end]
                if prefix in words:
                    suffixes = self.findWords(s, end, words)
                    for suffix in suffixes:
                        ans.append(prefix + ("" if suffix == "" else " ") + suffix)

        return ans