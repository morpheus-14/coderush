# Question URL - https://leetcode.com/problems/guess-number-higher-or-lower-ii/description/

import math

M = 200

dp = [[math.inf for _ in range(M + 1)] for _ in range(M + 1)]
for left in range(M, 0, -1):
    for right in range(left, M + 1):
        if left == right: dp[left][right] = 0
        else:
            for pivot in range(left, right + 1):
                leftCost = dp[left][pivot - 1] if pivot > left else 0
                rightCost = dp[pivot + 1][right] if pivot < right else 0
                cost = max(leftCost, rightCost)
                dp[left][right] = min(dp[left][right], cost + pivot)

class Solution:
    def getMoneyAmount(self, n: int) -> int:
        return dp[1][n]