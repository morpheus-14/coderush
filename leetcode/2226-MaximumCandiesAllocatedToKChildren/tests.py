from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        {
            "candies": [5, 8, 6],
            "k": 3
        },
        {
            "candies": [2, 5],
            "k": 11
        },

        # Random test cases
        {
            "candies": [4, 7, 5],
            "k": 4
        },
        {
            "candies": [4, 8, 4],
            "k": 4
        },
        {
            "candies": [4, 7],
            "k": 4
        },
    ]

    for test in tests:
        print(f"n = {test} --> {tester.maximumCandies(test['candies'], test['k'])}")


init()