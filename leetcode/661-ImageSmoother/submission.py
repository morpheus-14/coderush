# Question URL - https://leetcode.com/problems/image-smoother/description

from typing import List
from math import floor

class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        smooth_img = [row[:] for row in img]
        for i, row in enumerate(img):
            for j, cell in enumerate(row):
                sum = cell
                divisor = 1

                # top left
                if i != 0 and j != 0:
                    sum += img[i - 1][j - 1]
                    divisor += 1

                # top
                if i != 0:
                    sum += img[i - 1][j]
                    divisor += 1

                # top right
                if i != 0 and j != len(row) - 1:
                    sum += img[i - 1][j + 1]
                    divisor += 1



                # left
                if j != 0:
                    sum += row[j - 1]
                    divisor += 1

                # right
                if j != len(row) - 1:
                    sum += row[j + 1]
                    divisor += 1



                # down left
                if i != len(img) - 1 and j != 0:
                    sum += img[i + 1][j - 1]
                    divisor += 1

                # down
                if i != len(img) - 1:
                    sum += img[i + 1][j]
                    divisor += 1

                # down right
                if i != len(img) - 1 and j != len(row) - 1:
                    sum += img[i + 1][j + 1]
                    divisor += 1

                smooth_img[i][j] = floor(sum / divisor)
        return smooth_img