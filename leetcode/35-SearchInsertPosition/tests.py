from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'nums': [1, 3, 5, 6], 'target': 5 },
        { 'nums': [1, 3, 5, 6], 'target': 2 },
        { 'nums': [1, 3, 5, 6], 'target': 7 },

        # Other random test cases
        { 'nums': [1, 3, 5], 'target': 6 },
        { 'nums': [1, 3, 5, 7, 9], 'target': 6 },
        { 'nums': [1, 3, 5, 7, 9], 'target': 13 },
        { 'nums': [1, 3, 5, 7, 9], 'target': 11 },

        # Edge cases
        { 'nums': [1, 3, 5, 7, 9], 'target': 5 },
        { 'nums': [1, 3, 5, 6], 'target': 3 },
    ]

    for test in tests:
        print(f"nums = {test['nums']}, target = {test['target']} --> {tester.searchInsert(test['nums'], test['target'])}")


init()