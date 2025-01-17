import { reverseVowels } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        "IceCreAm",
        "leetcode"
    ]


    tests.forEach((s) => {
        console.log(`${s} -> ${reverseVowels(s)}`)
    })
}

init()