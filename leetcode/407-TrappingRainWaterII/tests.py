from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]],
        [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]],

        # Other random test cases
        [[1,4,3,1,4,2],[3,2,1,4,2,4],[2,3,3,2,4,1]],
        [[1,23,5,7],[10,8,16,20],[23,30,34,60]],

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.trapRainWater(test)}")


init()