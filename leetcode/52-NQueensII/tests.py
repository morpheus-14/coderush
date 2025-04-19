from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        4,
        1,

        # Other random test cases
        5,
        8

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.totalNQueens(test)}")


init()