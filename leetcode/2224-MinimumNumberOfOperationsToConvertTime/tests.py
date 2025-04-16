from submission import Solution

tester = Solution()

def init():
    tests = [
        # default test cases
        {
            "current": "02:30",
            "correct": "04:35"
        },
        {
            "current": "11:00",
            "correct": "11:01"
        },

        # Random test cases
        {
            "current": "11:00",
            "correct": "12:01"
        },
        {
            "current": "00:01",
            "correct": "23:16"
        },
    ]

    for test in tests:
        print(f"{test} --> {tester.convertTime(test['current'], test['correct'])}")


init()