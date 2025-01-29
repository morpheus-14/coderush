from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [ 2, 3, 1, 1, 4 ],
        [ 2, 3, 0, 1, 4 ]

        # Other random test cases

        # Edge cases
        # 29
    ]

    for test in tests:
        print(f"nums = {test} --> {tester.jump(test)}")


init()