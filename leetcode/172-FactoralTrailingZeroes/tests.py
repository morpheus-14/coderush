from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        3,
        5,
        0,

        # Other random test cases
        100,

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.trailingZeroes(test)}")


init()