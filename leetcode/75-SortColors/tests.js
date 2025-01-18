import { sortColors } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        [2, 0, 2, 1, 1, 0],
        [2, 0, 1],


        [0, 1],
        [1, 2],
        [0, 2, 1],
        [2, 2, 1],
        [0, 0, 2, 0],
        [1, 1, 1, 1, 1],

        Array.from({ length: Math.floor(Math.random() * 299) + 1 }, _ => Math.round(Math.random() * 2))
    ]

    tests.forEach(test => {
        console.log(
            `arr = ${test}\nlen = ${test.length}`
        )
        sortColors(test)
        console.log(
            `sorted= ${test}\n`
        )
    })
}

init()