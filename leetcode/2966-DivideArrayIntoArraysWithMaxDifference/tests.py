from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        {
            "nums": [ 1, 3, 4, 8, 7, 9, 3, 5, 1 ],
            "k": 2,
        },
        {
            "nums": [ 2, 4, 2, 2, 5, 2 ],
            "k": 2,
        },
        {
            "nums": [4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11],
            "k": 14,
        },

        # Other random test cases

        # Edge cases
    ]

    for test in tests:
        print(f"{test} --> {tester.divideArray(test['nums'], test['k'])}")


init()