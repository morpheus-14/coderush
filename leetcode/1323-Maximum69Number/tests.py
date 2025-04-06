from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        9669,
        9996,
        9999,

        # Other random test cases
        6666,
        696969,
        969696,

        # Edge cases

    ]

    for test in tests:
        print(f"n = {test} --> {tester.maximum69Number(test)}")


init()