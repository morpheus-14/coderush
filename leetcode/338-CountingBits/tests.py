from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        2,
        5,

        7,
        8
    ]

    for test in tests:
        print(f"n = {test} --> {tester.countBits(test)}")


init()