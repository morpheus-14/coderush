from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        19,
        2,

        # Other random test cases
        81,

        # Edge cases
        123457812
    ]

    for test in tests:
        print(f"nums = {test} --> {tester.isHappy(test)}")


init()