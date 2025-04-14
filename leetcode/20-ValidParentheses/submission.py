# Question URL - https://leetcode.com/problems/valid-parentheses/description

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            last = stack[-1:]
            if ch == "(" or ch == "[" or ch == "{":
                stack.append(ch)
                continue
            if (ch == ")" and last == ["("]) or (ch == "]" and last == ["["]) or (ch == "}" and last == ["{"]):
                stack.pop()
            else:
                return False
        return len(stack) == 0