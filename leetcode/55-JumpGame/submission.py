# Question URL - https://leetcode.com/problems/jump-game/description/

from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if nums[0] == 0 and len(num) > 1: return False
        reachable = 0
        for idx, num in enumerate(nums):
            if idx > reachable: return False
            reachable = max(reachable, num + idx)
        return True