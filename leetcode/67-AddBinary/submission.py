# Question URL - https://leetcode.com/problems/add-binary/description/

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        len_a = len(a)
        len_b = len(b)
        sum_len = max(len_a, len_b)
        carry = '0'
        ans = ""
        for i in range(1, sum_len + 1):
            sum = carry
            # Not ideal to convert to int then back to binary string
            if i <= len_a: sum += int(a[len_a-i: len_a-i+1] or 0)
            if i <= len_b: sum += int(b[len_b-i: len_b-i+1] or 0)
            sum = bin(sum)
            ans = sum[-1:] + ans
            carry = 1 if sum[-2: -1] == '1' else 0
        if carry == 1: ans = str(carry) + ans
        return ans