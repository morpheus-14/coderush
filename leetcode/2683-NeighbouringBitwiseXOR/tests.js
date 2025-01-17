import { doesValidArrayExist } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        [1, 1, 0],
        [1, 1],
        [1, 0],
    ]

    tests.forEach((test) => {
        console.log(
            `derived = ${test} --> ${doesValidArrayExist(test)}`
        )
    })
}

init()