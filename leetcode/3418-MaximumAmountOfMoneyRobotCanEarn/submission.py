# Question URL -https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/description/

from typing import List

class Solution:
    def maxAmountMods(self, coins: List[List[int]], mods: int) -> int:
        m, n, z = len(coins), len(coins[0]), mods + 1
        dp = [[[-1000] * z for _ in range(n)] for _ in range(m)]
        dp[0][0][0] = coins[0][0]

        for k in range(1, z):
            dp[0][0][k] = max(coins[0][0], 0)

        for j in range(1, n):
            for k in range(z):
                dp[0][j][k] = dp[0][j - 1][k] + coins[0][j]
                if k > 0:
                    dp[0][j][k] = max(
                        dp[0][j][k], dp[0][j - 1][k - 1] + max(coins[0][j], 0)
                    )

        for i in range(1, m):
            for k in range(z):
                dp[i][0][k] = dp[i - 1][0][k] + coins[i][0]
                if k > 0:
                    dp[i][0][k] = max(
                        dp[i][0][k], dp[i - 1][0][k - 1] + max(coins[i][0], 0)
                    )
        
        for i in range(1, m):
            for j in range(1, n):
                for k in range(z):
                    dp[i][j][k] = max(dp[i - 1][j][k], dp[i][j - 1][k]) + coins[i][j]
                    if k > 0:
                        dp[i][j][k] = max(
                            dp[i][j][k],
                            max(dp[i][j - 1][k - 1], dp[i - 1][j][k - 1])
                        )

        return dp[m - 1][n - 1][z - 1]
    
    def maximumAmount(self, coins: List[List[int]]) -> int:
        return self.maxAmountMods(coins, 2)