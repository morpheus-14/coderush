import { removeInvalidParentheses, isValid } from "./submission.js"

// For all values from 1 to 1000
function init() {
    const tests = [

        // Default test cases
        "()())()",
        "(a)())()",
        ")(",

        // Random test cases
        "()(()()))()",
        "())))((()))))()()()()))((",
        "())(((()))()()()()))",
        "()(((()))()()()())",

        // Edge cases
    ]


    tests.forEach((s) => {
        // console.log(`${s} -> ${isValid(s)}`)
        console.log(`${s} -> ${removeInvalidParentheses(s)}`)
    })
}

init()