import { romanToInt } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        "III",
        "LVIII",
        "MCMXCIV",

        "MMMDCCXXIV",
        "MMCDXXV",
    ]

    tests.forEach((test) => {
        console.log(
            `${test} -> ${romanToInt(test)}`
        )
    })
}

init()