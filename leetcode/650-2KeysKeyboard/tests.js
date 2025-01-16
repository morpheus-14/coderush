import { minSteps } from "./submission.js"

// For all values from 1 to 1000
function init() {
    for (let i = 1; i <= 100; i++) {
        console.log(`N = ${i} --> ${minSteps(i)}`)
    }
}

init()