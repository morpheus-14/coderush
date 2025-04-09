from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'boxTypes': [[1,3],[2,2],[3,1]], 'truckSize': 4 },
        { 'boxTypes': [[5,10],[2,5],[4,7],[3,9]], 'truckSize': 10 },

        # Other random test cases

        # Edge cases
        { 'boxTypes': [[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 'truckSize': 35 },
    ]

    for test in tests:
        print(f"{test} --> {tester.maximumUnits(test['boxTypes'], test['truckSize'])}")


init()