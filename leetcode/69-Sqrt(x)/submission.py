# Question URL - https://leetcode.com/problems/sqrtx/description/

from typing import List
from math import floor

class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0: return 0
        if x < 4: return 1
        mid = x / 2
        while mid > 1 and mid < x:
            midI = floor(mid)
            if midI * midI == x:
                return midI
            if midI * midI < x:
                if (midI + 1) * (midI + 1) > x: return midI
                else:
                    if (midI + 1) * (midI + 1) == x: return midI + 1
                    mid = mid * 1.5
            else:
                if (midI - 1) * (midI - 1) <= x: return midI - 1
                mid = mid / 2