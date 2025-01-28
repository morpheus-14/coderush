from submission import Solution

tester = Solution()

def init():
    # tests = [
    #     # default test cases
    #     4,
    #     8,

    #     # Other random test cases

    #     # Edge cases
    #     # 29
    # ]

    # Test with all numbers upto n
    tests = list(range(1, 51))

    for test in tests:
        print(f"n = {test} --> {tester.mySqrt(test)}")


init()