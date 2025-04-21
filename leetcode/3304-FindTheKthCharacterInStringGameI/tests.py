from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        5,
        10,

        # Other random test cases
        17,
        125,

        # Edge cases

        # TLE cases
        500

    ]

    for test in tests:
        print(f"n = {test} --> {tester.kthCharacter(test)}")


init()