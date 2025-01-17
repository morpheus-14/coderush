// Question URL - https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = (l1, l2) => {
    let sum = 0
    let current = new ListNode(0)
    let result = current

    // Key here is to add by digit and not convert to number
    // If converting to number and then converting back to list, use bigint as we will lose precision for large numbers in js
    while (l1 || l2) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        current.next = new ListNode(sum % 10)
        current = current.next
        // Handle carry for next digit
        sum = sum > 9 ? 1 : 0
    }

    // Handle carry for new digit
    if (sum) {
        current.next = new ListNode(sum)
    }

    return result.next
}

export function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}