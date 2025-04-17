from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [ 1, -3, 2, 3, -4 ],
        [ 2, -5, 1, -4, 3, -2 ]

        # Other random test cases

        # Edge cases
    ]

    for test in tests:
        print(f"nums = {test} --> {tester.maxAbsoluteSum(test)}")


init()