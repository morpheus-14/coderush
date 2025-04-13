from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        4,
        1,

        # Other random test cases
        5,
        8

        # Edge cases
    ]

    for test in tests:
        sol = tester.solveNQueens(test)
        pr = ["\n".join(s) for s in sol]
        print("n = ",test," -->\n")
        for idx, s in enumerate(pr):
            print(idx + 1)
            print(s, "\n")
        print("------- END --------\n")


init()