import { removeDuplicates } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        [1, 1, 2],
        [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        [1, e]
    ]

    tests.forEach(test => {
        console.log(
            `arr = ${test}`
        )
        const k = removeDuplicates(test)
        console.log(
            `k = ${k}\nnums=${test}`
        )
    })
}

init()