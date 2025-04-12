from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'matrix': [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 'target': 3 },
        { 'matrix': [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 'target': 13 },

        # Other random test cases
        { 'matrix': [[1,3,5,7],[20,21,36,40],[43,50,64,80]], 'target': 22 },
        { 'matrix': [[1,3,5,7],[20,21,36,40],[43,50,64,80]], 'target': 20 },
        { 'matrix': [[1,3,5,7],[20,21,36,40],[43,50,64,80]], 'target': 60 },

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.searchMatrix(test['matrix'], test['target'])}")


init()