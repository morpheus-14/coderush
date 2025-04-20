from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        "010",
        "0101",

        # Other random test cases

        # Edge cases

        # TLE cases
        "0101010110101010110101010110101010110110001000010100101010110101010110101010110101010110110001000010",
    ]

    for test in tests:
        print(f"s = {test} --> {tester.maximumOddBinaryNumber(test)}")


init()