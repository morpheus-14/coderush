import { isPalindrome } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        121,
        -1,
        -121,

        2020, // multiple of 10 case
        1234312,
        892298, // Even case
        12321, // Odd case
        Math.pow(2, 30), // Large number case
        1234554321, // Large palindrome
    ]

    tests.forEach((test) => {
        console.log(
            `${test} is${!isPalindrome(test) ? " NOT": ""} a palindrome`
        )
    })
}

init()