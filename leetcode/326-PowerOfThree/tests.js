import { isPowerOfThree } from "./submission.js"

const init = () => {
    // Range -9 to 50
    let tests = Array.from({ length: 50 + 9 + 1 }, (_, i) => (-9) + i)
    // Powers for 3 from 3 to 10
    tests = tests.concat(Array.from({ length: 11 }, (_ , i) => Math.pow(3, i + 3) ))
    tests.forEach(n => {
        console.log(`${n} is${!isPowerOfThree(n) ? " NOT" : ""} a power of 3`)
    })
}

init()