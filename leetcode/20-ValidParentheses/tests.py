from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        "()",
        "()[]{}",
        "(]",
        "([])"

        # Random test cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.isValid(test)}")


init()
