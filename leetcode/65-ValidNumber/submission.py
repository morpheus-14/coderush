# Question URL - https://leetcode.com/problems/valid-number/description/

class Solution:
    def isNumber(self, s: str) -> bool:
        is_dec, is_exp, has_nums = False, False, False
        for idx, char in enumerate(s):
            if char.isdigit():
                has_nums = True
            elif char in "+-":
                # + - at the start or right after e
                if idx > 0 and (s[idx - 1] not in "eE"): return False
            elif char in "eE":
                # Accomodate cases like .e1, 43.e12
                if idx == 0 or is_exp or not has_nums or (idx > 0 and s[idx - 1] not in "01234556789."): return False
                is_exp = True
                has_nums = False
            elif char == ".":
                if is_dec or is_exp:
                    return False
                is_dec = True
            else: return False
        return has_nums