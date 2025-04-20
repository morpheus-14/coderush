# Question URL - https://leetcode.com/problems/maximum-odd-binary-number/description

class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        one_count = s.count('1')
        if one_count == 1: return ("0" * (len(s) - 1)) + "1"
        else: return (("1" * (one_count - 1)) + ("0" * (len(s) - one_count)) + "1")