# Question URL - https://leetcode.com/problems/prime-in-diagonal/description/

from typing import List

class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:

        # Reduce number or iterations needed
        def isPrime(num):
            if num == 1:
                return False
            if num <= 3:
                return True
            if (num % 2 == 0) or (num % 3 == 0):
                return False
            for i in range(5, int(num ** 0.5)+1, 6):
                if num % i == 0 or num % (i+2) == 0:
                    return False
            return True

        diagonals = []
        for i in range(len(nums)):
            diagonals += [nums[i][i]]
            diagonals += [nums[i][len(nums) - i - 1]]

        diagonals.sort()
        # Only do prime checks from largest diagonal number
        for num in diagonals[::-1]:
            if isPrime(num):
                return num

        return 0
