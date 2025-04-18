# Question URL - https://leetcode.com/problems/factorial-trailing-zeroes/description

from typing import List

class Solution:
    def trailingZeroes(self, n: int) -> int:
        if n == 0: return 0
        return n // 5 + self.trailingZeroes(n // 5)