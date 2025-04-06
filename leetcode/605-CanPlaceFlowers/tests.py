from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'flowerbed': [1, 0, 0, 0, 1], 'n': 1 },
        { 'flowerbed': [1, 0, 0, 0, 1], 'n': 2 },

        # Other random test cases
        { 'flowerbed': [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], 'n': 2 },

        # Edge cases
        # { 'flowerbed': [1, 0, 1, 0, 1, 0, 1], 'n': 1 },
        # { 'flowerbed': [1, 0, 1, 0, 1, 0, 1], 'n': 0 },
        # { 'flowerbed': [0, 0, 1, 0, 1], 'n': 1 },
        # { 'flowerbed': [1, 0, 1, 0, 0], 'n': 1 },
        { 'flowerbed': [0], 'n': 1 },
        # { 'flowerbed': [0, 0, 0], 'n': 2 },
        # { 'flowerbed': [0, 0, 0], 'n': 3 },
        # { 'flowerbed': [1, 0, 0, 0, 0], 'n': 2 },
        # { 'flowerbed': [0, 0, 0, 0, 1], 'n': 3 },
        { 'flowerbed': [0, 0], 'n': 2 },
        { 'flowerbed': [0, 0, 0], 'n': 2 },

    ]

    for test in tests:
        print(f"{test} --> {tester.canPlaceFlowers(test['flowerbed'], test['n'])}")


init()