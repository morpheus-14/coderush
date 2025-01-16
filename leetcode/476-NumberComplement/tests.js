import { findComplement } from "./submission.js"

function init() {
    for (let i = 1; i <= 100; i++) {
        console.log(`Complement of ${i} -> ${findComplement(i)}`)
    }
}

init()