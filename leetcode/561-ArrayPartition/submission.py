# Question URL - https://leetcode.com/problems/array-partition/description/

from typing import List
from functools import reduce

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return reduce(lambda a, b: a + b, [x for idx, x in enumerate(nums) if idx % 2 == 0])