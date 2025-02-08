# Question URL - https://leetcode.com/problems/counting-bits/description/

from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        return [i.bit_count() for i in range(n + 1)]