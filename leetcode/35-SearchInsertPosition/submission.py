# Question URL - https://leetcode.com/problems/search-insert-position/

from typing import List
from math import ceil

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        arr_len = len(nums)
        # Base cases for list of length 0-2
        if arr_len == 0 or nums[0] >= target:
            return 0
        if arr_len == 1:
            return 1
        if arr_len == 2:
            return 1 if nums[1] >= target else 2
        if arr_len > 2:
            mid = int(arr_len / 2)
            if arr_len % 2 == 1: mid = int(ceil(arr_len / 2)) #Odd case
            if nums[mid] == target: return mid
            return self.searchInsert(nums[0:mid], target) if nums[mid] > target else mid + self.searchInsert(nums[mid:], target)