from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        10,
        1,
        2,

        # Other random test cases
        45,
        77,

        # Edge cases

        # TLE Tests
        191,
        200,
    ]

    for test in tests:
        print(f"n = {test} --> {tester.getMoneyAmount(test)}")


init()