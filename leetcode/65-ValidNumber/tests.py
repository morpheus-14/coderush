from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        "0",
        "e",
        ".",

        # # Other random test cases
        "1.34",
        "-93.34",
        "4e-3",
        "4e12.-3",

        # Edge cases
        "1e333",
        "10e2.4",
        "e9",
        "0e",
        ".23",
        "3."

        # Large string
    ]

    for test in tests:
        print(f"n = {test} --> {tester.isNumber(test)}")


init()