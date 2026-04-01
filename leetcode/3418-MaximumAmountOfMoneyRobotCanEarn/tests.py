from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [[ 0, 1, -1 ], [ 1, -2, 3 ], [ 2, -3, 4 ]],
        [[ 10, 10, 10 ], [ 10, 10, 10 ]],

        # Other random test cases

        # Edge cases
        [[ -1000, -1000, -1000 ], [ -1000, -1000, -1000 ]]
    ]

    for test in tests:
        print(f"coins = {test} --> {tester.maximumAmount(test)}")


init()