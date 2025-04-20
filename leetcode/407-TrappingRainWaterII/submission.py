# Question URL - https://leetcode.com/problems/trapping-rain-water-ii/description

from typing import List
import heapq

class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        m, n = len(heightMap), len(heightMap[0])
        if m < 3 or n < 3: return 0

        visited = [([False] * n) for _ in range(m)]
        p_queue = []
        for i in range(m):
            for j in [0, n - 1]:
                if not visited[i][j]:
                    heapq.heappush(p_queue, (heightMap[i][j], i, j))
                    visited[i][j] = True

        for j in range(n):
            for i in [0, m - 1]:
                if not visited[i][j]:
                    heapq.heappush(p_queue, (heightMap[i][j], i, j))
                    visited[i][j] = True

        directions = [ (-1, 0), (0, -1), (1, 0), (0, 1) ]
        ans, level = 0, 0

        while p_queue:
            height, x, y = heapq.heappop(p_queue)
            level = max(level, height)

            for dx, dy in directions:
                i, j = dx + x, dy + y
                if 0 <= i < m and 0 <= j < n and not visited[i][j]:
                    heapq.heappush(p_queue, (heightMap[i][j], i, j))
                    delta = level - heightMap[i][j]
                    if delta > 0: ans += delta
                    visited[i][j] = True

        return ans
