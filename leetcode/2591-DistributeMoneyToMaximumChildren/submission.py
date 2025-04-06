# Question URL - https://leetcode.com/problems/distribute-money-to-maximum-children/description/

class Solution:
    def distMoney(self, money: int, children: int) -> int:
        if children > money: return -1
        if money < 8: return 0
        child_8 = 0
        while money >= 8 and children > 0 and children < money:
            money -= 8
            child_8 += 1
            children -= 1
        if not children: return child_8 if money == 0 else child_8 - 1
        else:
            if children == money: return child_8
            if children > money:
                child_8 -= ((children - money) // 8) + 1
                return child_8
            if children == 1 and money == 4:
                return child_8 - 1
            return child_8