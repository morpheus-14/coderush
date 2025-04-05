from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [1, 4, 3, 2],
        [6, 2, 6, 5, 1, 2]

        # Other random test cases

        # Edge cases
    ]

    for test in tests:
        print(f"strs = {test} --> {tester.arrayPairSum(test)}")


init()