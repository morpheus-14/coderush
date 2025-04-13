# Question URL - https://leetcode.com/problems/n-queens/description

from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        def queens(row):
            if row == n:
                copy = board[:]
                sol = []
                for c in copy:
                    sol.append("".join(c[:]))
                ans.append(sol)
                return

            for col in range(n):
                if placedCol[col] or placedPos[row + col] or placedNeg[n - 1 + row - col]:
                    continue

                board[row][col] = "Q"
                placedCol[col] = 1
                placedPos[row + col] = 1
                placedNeg[n - 1 + row - col] = 1

                queens(row + 1)

                board[row][col] = "."
                placedCol[col] = 0
                placedPos[row + col] = 0
                placedNeg[n - 1 + row - col] = 0

        board = [["."] * n for _ in range(n)]

        placedCol = [0] * n # Column
        placedPos = [0] * (2*n - 1) # Positive Diagonal (row + col)
        placedNeg = [0] * (2*n - 1)  # Negative Diagonal (row - col)

        ans = []

        queens(0)
        return ans