from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'a': "11", 'b': "1" },
        { 'a': "1010", 'b': "1011" },

        # Other random test cases
        { 'a': "10101010", 'b': "11001100" },


        # Edge cases
        { 'a': "100", 'b': "110010" },
        { 'a': "11010110", 'b': "10110100000" },
    ]

    for test in tests:
        print(f"{test} --> {tester.addBinary(test['a'], test['b'])}")


init()