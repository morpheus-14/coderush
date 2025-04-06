# Question URL - https://leetcode.com/problems/valid-palindrome-ii/description/

class Solution:
    def validPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        is_valid, removed = True, False
        # Remove left when not matching
        while left < right:
            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                if removed:
                    is_valid = False
                    break
                left += 1
                removed = True
        if is_valid: return is_valid
        is_valid, removed = True, False
        left, right = 0, len(s) - 1
        # Remove right when not matching
        while left < right:
            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                if removed: return False
                right -= 1
                removed = True

        return is_valid