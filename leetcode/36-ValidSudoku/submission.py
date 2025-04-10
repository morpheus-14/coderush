# Question URL - https://leetcode.com/problems/valid-sudoku/description

from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        res = []
        for i, row in enumerate(board):
            for j, cell in enumerate(row):
                if cell != ".":
                    # row (int, str) , col (str, int), sub-box (int, int, str)
                    res += [(i, cell), (cell, j), (i // 3, j // 3, cell)]
        return len(res) == len(set(res))