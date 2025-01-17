import { maxSubArray } from "./submission.js"

function init() {
    const tests = [
        [2, 4, -3],
        [1],
        [5, 4, -1, 7, 8],
        [5, -6, 4],
        [9, 7, -8, 6],
        [-7, 8, 9],
        [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    ]

    tests.forEach(test => {
        console.log(
            `arr = ${test} -> ${maxSubArray(test)}`
        )
    })
}

init()