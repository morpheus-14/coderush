import { strangePrinter } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        "aaabbb",
        "aba",

        // Other cases
        "aabbccaaddaadd"
    ]

    tests.forEach(test => {
        console.log(`S = ${test} --> ${strangePrinter(test)}`)
    })
}

init()