import { isArraySpecial } from "./submission.js"

function init() {
    const tests = [
        // Default test cases
        {
            nums: [ 3, 4, 1, 2, 6 ],
            queries: [[ 0, 4 ]],
        },
        {
            nums: [ 4, 3, 1, 6 ],
            queries: [[ 0, 2 ], [ 2, 3 ]],
        },

        // Random test cases
        {
            nums: [ 4, 3, 2, 7, 9 ],
            queries: [[ 0, 3 ], [ 2, 4 ]],
        },

        // Edge cases
        {
            nums: [ 1 ],
            queries: [[ 0, 0 ]],
        },
    ]


    tests.forEach(({ nums, queries }) => {
        console.log("nums =", nums, "\nq =", queries, "\nans =", isArraySpecial(nums, queries), "\n")
    })
}

init()