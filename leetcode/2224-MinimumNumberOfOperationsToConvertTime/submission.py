# Question URL - https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/description/

class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        start_h, start_m = int(current[:2]), int(current[3:])
        end_h, end_m = int(correct[:2]), int(correct[3:])
        diff = (60 * end_h + end_m) - (60 * start_h + start_m)
        steps = 0
        for inc in [60, 15, 5, 1]:
            if diff >= inc:
                steps += diff // inc
                diff -= inc * (diff // inc)
        return steps