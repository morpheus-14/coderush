from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [[1,1,1],[1,0,1],[1,1,1]],
        [[100,200,100],[200,50,200],[100,200,100]],

        # Other random test cases

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.imageSmoother(test)}")


init()