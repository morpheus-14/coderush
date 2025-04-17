# Question URL - https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/

from itertools import accumulate
from typing import List
import math

class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        # min_sum, max_sum = math.inf, -math.inf
        # curr_min_sum, curr_max_sum = 0, 0

        # for num in nums:
        #     curr_max_sum += num
        #     curr_min_sum += num
        #     min_sum = min(min_sum, curr_min_sum)
        #     max_sum = max(max_sum, curr_max_sum)

        #     if curr_min_sum > 0: curr_min_sum = 0
        #     if curr_max_sum < 0: curr_max_sum = 0

        # return max(max_sum, -min_sum)
        return max(accumulate(nums, initial=0)) - min(accumulate(nums, initial=0))