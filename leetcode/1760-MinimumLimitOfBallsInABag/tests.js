import { minimumSize } from "./submission.js"

function init() {
    const tests = [
        {
            nums: [9],
            maxOperations: 2
        },
        {
            nums: [2, 4, 8, 2],
            maxOperations: 4
        },
        {
            nums: [2, 4, 8, 2],
            maxOperations: 0
        },
        {
            // To test time for larger sized arrays
            // Array of random length, random values and random max operations all within range of constraints
            nums: Array.from(
                { length: Math.floor((Math.random() * 9999)) + 1 },
                () => Math.floor(Math.random() * Math.pow(10, 5))
            ),
            maxOperations: Math.floor(Math.random() * Math.pow(10, 5))
        }
    ]


    tests.forEach(({ nums, maxOperations }) => {
        console.log(`${nums}\nlength: ${nums.length}\nmaxOperations: ${maxOperations} -> Largest bag = ${minimumSize(nums, maxOperations)}`)
    })
}

init()