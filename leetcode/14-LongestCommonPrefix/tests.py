from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        [ "flower", "flow", "flight"],
        [ "dog", "racecar", "car"],

        # Other random test cases
        [ "sprachgefuhl", "sprachgefuhls", "sprack", "spraddle", "spraddled", "spraddles", "spraddling", "sprag", "spill" ],

        # Edge cases
    ]

    for test in tests:
        print(f"strs = {test} --> {tester.longestCommonPrefix(test)}")


init()