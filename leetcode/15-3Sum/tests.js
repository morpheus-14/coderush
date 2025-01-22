import { threeSum } from "./submission.js"

function init() {
    const tests = [
        [-1, 0, 1, 2, -1, -4],
        [0, 1, 1],
        [0, 0, 0],
        [-2, 0, 1, 1, 2]
    ]

    tests.forEach((nums) => {
        console.log(
            `nums = ${nums} --> ${threeSum(nums).map(num => num.join("-"))}`
        )
    })
}

init()