from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'money': 20, 'children': 3 },
        { 'money': 16, 'children': 2 },

        # Other random test cases
        { 'money': 4, 'children': 2 },

        # Edge cases
        { 'money': 8, 'children': 2 },
        { 'money': 9, 'children': 2 },
        { 'money': 18, 'children': 5 },
        { 'money': 18, 'children': 2 },

    ]

    for test in tests:
        print(f"{test} --> {tester.distMoney(test['money'], test['children'])}")


init()