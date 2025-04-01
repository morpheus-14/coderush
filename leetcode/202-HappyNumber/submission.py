# Question URL - https://leetcode.com/problems/happy-number/description/

from math import floor, log, pow

class Solution:
    def isHappy(self, n: int) -> bool:
        curr = n
        cycle_nums = set()
        while curr not in cycle_nums:
            if curr == 1: return True
            cycle_nums.add(curr)
            digits = floor(log(curr, 10))
            sum = 0
            for i in range(digits + 1):
                digit = curr // 10 ** i % 10
                sum += (digit * digit)
            curr = sum
        return False