import { applyOperations } from "./submission.js"

function init() {
    const tests = [
        [1, 2, 2, 1, 1, 0],
        [0, 1],
    ]

    tests.forEach(test => {
        console.log(
            `arr = ${test} -> ${applyOperations(test)}`
        )
    })
}

init()