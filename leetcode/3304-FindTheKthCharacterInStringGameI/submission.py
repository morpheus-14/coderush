# Question URL - https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/

class Solution:
    def kthCharacter(self, k: int) -> str:
        return chr(97 + (k - 1).bit_count()) # ord('a') = 97