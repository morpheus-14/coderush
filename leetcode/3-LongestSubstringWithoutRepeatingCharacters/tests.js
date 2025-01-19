import { lengthOfLongestSubstring } from "./submission.js"

const init = () => {
    const tests = [
        // Default cases
        // "abcabcbb",
        // "bbbbb",
        // "pwwkew",

        // "abcajk,bc123bb",
        // "dvdf"
        // "tmmzuxt"
        "aabaab!bb"
    ]

    tests.forEach((test) => {
        console.log(`s: ${test} -> ${lengthOfLongestSubstring(test)}\n\n`)
    })
}

init()