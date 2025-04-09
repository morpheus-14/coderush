# Question URL - https://leetcode.com/problems/maximum-units-on-a-truck/description/

from typing import List

class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda box: box[1], reverse=True)
        units_stored = 0
        i = 0
        while truckSize != 0 and i < len(boxTypes):
            box, units = boxTypes[i]
            if box <= truckSize:
                units_stored += box * units
                truckSize -= box
            else:
                units_stored += truckSize * units
                truckSize = 0
            i += 1
        return units_stored