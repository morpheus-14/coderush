from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        "aba",
        "abca",
        "abc",

        # # Other random test cases
        "abbcddcba",

        # # Edge cases
        "bb",
        "deeee",
        # "cbbd",

        # # Large string
        # "aguokepatgbnvfqmgmlucupuufxoohdfpgjdmysgvhmvffcnqxj"
        "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
    ]

    for test in tests:
        print(f"n = {test} --> {tester.validPalindrome(test)}")


init()