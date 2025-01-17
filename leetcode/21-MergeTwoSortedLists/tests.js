import { mergeTwoLists, ListNode } from "./submission.js"


// For writing test cases easily
export const arrayToList = arr => {
    return arr.reverse().reduce((acc, curr) => {
        if (acc == null) {
            acc = new ListNode(curr)
        } else {
            acc = new ListNode(curr, acc)
        }
        return acc
    }, null)
}

// For printing as array
export const listToArray = list => {
    let arr = []
    while (list) {
        arr.push(list.val)
        list = list.next
    }
    return arr
}

function init() {
    const tests = [
        // Default cases
        {
            l1: [1, 2, 4],
            l2: [1, 3, 4]
        },
        {
            l1: [],
            l2: []
        },
        {
            l1: [],
            l2: [0]
        },


        {
            l1: [-100, 50, 100],
            l2: [1, 2, 5]
        },
        {
            l1: [1, 2, 4, 5, 10, 20],
            l2: [4, 6, 8]
        },
        {
            l1: [4, 6, 8],
            l2: [7, 10, 40, 59]
        },
        {
            l1: [80, 100],
            l2: [7, 10, 40, 59]
        },
        {
            l1: Array.from({ length: 50 }, (_, idx) => idx - 20),
            l2: [7, 10, 40, 59]
        },
        {
            l1: Array.from({ length: 50 }, (_, idx) => idx - 20),
            l2: Array.from({ length: 50 }, (_, idx) => idx % 50),
        },
    ]

    tests.forEach(test => {
        console.log(
            `l1 = ${test.l1}\nl2 = ${test.l2}\nmerged=${listToArray(mergeTwoLists(arrayToList(test.l1), arrayToList(test.l2)))}\n`
        )
    })
}

init()