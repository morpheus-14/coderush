import { decodeString } from "./submission.js"

// For all values from 1 to 1000
function init() {
    const tests = [
        "3[a]2[bc]",
        "3[a2[c]]",
        "2[abc]3[cd]ef",
        "2[abc3[dfg]2[h]]i",
        "10[x]"
    ]


    tests.forEach((s) => {
        console.log(`${s} -> ${decodeString(s)}`)
    })
}

init()