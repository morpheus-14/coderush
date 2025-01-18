import { flipAndInvertImage } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
        [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
    ]

    tests.forEach(test => {
        console.log("matrix = ")
        test.map(row => {
            console.log(row)
        })
        console.log("flipped = ")
        flipAndInvertImage(test).map(row => {
            console.log(row)
        })
    })
}

init()