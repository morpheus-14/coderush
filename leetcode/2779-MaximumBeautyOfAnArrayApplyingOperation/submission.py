# Question URL - https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/description/

from typing import List

class Solution:
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        nums.sort()
        left = 0

        for num in nums:
            if num - nums[left] > k * 2: left += 1

        return len(nums) - left