import { addTwoNumbers, ListNode } from "./submission.js"


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
        {
            l1: [2, 4, 3],
            l2: [5, 6, 4]
        },
        {
            l1: [9, 7, 8, 6],
            l2: [7, 8, 9]
        },
        {
            l1: [0],
            l2: [0]
        },
        {
            l1: [9,9,9,9,9,9,9],
            l2: [9,9,9,9]
        },
        {
            l1: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            l2: [5,6,4]
        },
    ]

    tests.forEach(test => {
        console.log(
            `l1 = ${test.l1}, l2 = ${test.l2} --> ${listToArray(addTwoNumbers(arrayToList(test.l1), arrayToList(test.l2)))}`
        )
    })
}

init()