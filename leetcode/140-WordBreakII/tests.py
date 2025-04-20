from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 's': "catsanddog", 'wordDict': [ "cat","cats","and","sand","dog" ] },
        { 's': "pineapplepenapple", 'wordDict': [ "apple","pen","applepen","pine","pineapple" ] },
        { 's': "catsandog", 'wordDict': [ "cats","dog","sand","and","cat" ] },

        # Other random test cases

        # Edge cases
    ]

    for test in tests:
        print(f"n = {test} --> {tester.wordBreak(test['s'], test['wordDict'])}")


init()