import { merge } from "./submission.js"

function init() {
    const tests = [
        // Default cases
        {
            nums1: [1, 2, 3, 0, 0, 0],
            m: 3,
            nums2: [2, 5, 6],
            n: 3
        },
        {
            nums1: [1],
            m: 1,
            nums2: [],
            n: 0
        },
        {
            nums1: [0],
            m: 0,
            nums2: [1],
            n: 1
        },
    ]

    tests.forEach(test => {
        console.log(
            `nums1 = ${test.nums1}\nnums2 = ${test.nums2}`
        )
        merge(test.nums1, test.m, test.nums2, test.n)
        console.log(
            `Merged = ${test.nums1}\n`
        )
    })
}

init()