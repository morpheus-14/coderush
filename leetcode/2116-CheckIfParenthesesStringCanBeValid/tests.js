import { canBeValid } from "./submission.js"

// For all values from 1 to 1000
function init() {
    const tests = [
        {
            s: "))()))",
            locked: "010100"
        },
        {
            s: "()()",
            locked: "0000"
        },
        {
            s:")",
            locked: "0"
        },
        {
            s: "))()))", //()()()
            locked: "010101"
        },
        {
            s:"((()(()()))()((()()))))()((()(()",
            locked: "10111100100101001110100010001001"
        },
        {
            s: "((()",
            locked: "1010"
        },
        // "()())()",
        // "(a)())()",
        // "()(()()))()",
        // "())))((()))))()()()()))((",
        // "())(((()))()()()()))",
        // "()(((()))()()()())"
    ]

    tests.forEach(({ s, locked }) => {
        console.log(`S = ${s}\n L=${locked}\n${canBeValid(s, locked)}`)
    })
}

init()