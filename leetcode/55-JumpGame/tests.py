from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [ 2, 3, 1, 1, 4 ],
        [ 3, 2, 1, 0, 4 ],

        # Other random test cases
        [ 0, 3, 2, 1, 1, 0 ],
        [ 3, 0, 1, 1, 0 ],

        # Edge cases
        [ 3, 2, 1, 1, 0 ],
        [ 0 ]
    ]

    for test in tests:
        print(f"nums = {test} --> {tester.canJump(test)}")


init()