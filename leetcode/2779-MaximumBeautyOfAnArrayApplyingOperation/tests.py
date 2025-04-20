from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'nums': [ 4, 6, 1, 2 ], 'k': 2 },
        { 'nums': [ 1, 1, 1, 1 ], 'k': 10 },

        # Other random test cases

        # Edge cases

    ]

    for test in tests:
        print(f"{test} --> {tester.maximumBeauty(test['nums'], test['k'])}")


init()