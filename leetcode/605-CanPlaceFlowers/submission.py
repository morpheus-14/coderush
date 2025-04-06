# Question URL - https://leetcode.com/problems/can-place-flowers/description/

from typing import List
from functools import reduce
from operator import add

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0: return True
        if 1 not in flowerbed: return (len(flowerbed) + 1) // 2 >= n

        curr_grp = 0
        start_grp = 0
        end_grp = 0
        empty_slots = []
        start_idx, end_idx = 0, len(flowerbed)
        available = 0

        for idx, slot in enumerate(flowerbed):
            if slot:
                start_idx = idx
                break
            start_grp += 1
        for idx, slot in enumerate(flowerbed[::-1]):
            if slot:
                end_idx = len(flowerbed) - idx
                break
            end_grp += 1
        # 0s at start and end of list need to be handled separately
        available += (start_grp // 2) + (end_grp // 2)

        for slot in flowerbed[start_idx: end_idx]:
            if slot:
                if curr_grp > 2: empty_slots.append(curr_grp)
                curr_grp = 0
            else:
                curr_grp += 1
        if curr_grp: empty_slots.append(curr_grp)
        if len(empty_slots) == 0: return available >= n
        # Continuous 0s need to be 2n + 1 to accomodate n flowers
        available += reduce(add, [(x - 1) // 2 for x in empty_slots])
        return available >= n