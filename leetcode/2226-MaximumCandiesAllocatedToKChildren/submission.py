# Question URL - https://leetcode.com/problems/counting-bits/description/

import math
from typing import List

class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        left, right = 1, max(candies)
        res = 0

        while left <= right:
            curr = (left + right) // 2

            children = sum([candy // curr for candy in candies])

            if children >= k:
                res = curr
                left = curr + 1
            else:
                right = curr - 1

        return res