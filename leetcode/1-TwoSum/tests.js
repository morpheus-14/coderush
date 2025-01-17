import { twoSum } from "./submission.js"

function init() {
    const tests = [
        {
            nums: [2, 7, 11, 15],
            target: 9
        },
        {
            nums: [3, 2, 4],
            target: 6
        },
        {
            nums: [3, 3],
            target: 6
        },
    ]

    tests.forEach(({ nums, target }) => {
        console.log(
            `nums = ${nums}\ntarget= ${target} --> ${twoSum(nums, target)}`
        )
    })
}

init()