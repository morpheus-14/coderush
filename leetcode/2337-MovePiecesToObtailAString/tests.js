import { canChange } from "./submission.js"

// For all values from 1 to 1000
function init() {
    const tests = [
        {
            start: "_L__R__R_",
            target: "L______RR",
        },
        {
            start: "R_L_",
            target: "__LR",
        },
        {
            start: "_R",
            target: "R_",
        },
        {
            start: "R__L",
            target: "__RL",
        },
    ]


    tests.forEach(({ start, target }) => {
        console.log(`${start} -> ${target} --> ${canChange(start, target)}`)
    })
}

init()