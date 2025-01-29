# Question URL - https://leetcode.com/problems/jump-game-ii/description/

from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        maxIdx = 0
        jumps = 0
        end = 0
        for idx in range(len(nums) - 1):
            maxIdx = max(maxIdx, idx + nums[idx])
            if idx == end:
                jumps += 1
                end = maxIdx
        return jumps