// Question URL - https://leetcode.com/problems/merge-two-sorted-lists/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

export const mergeTwoLists = (list1, list2) => {
    const merged = new ListNode()
    let head = merged
    while (list1 && list2) {
        if (list2.val >= list1.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2
            list2 = list2.next
        }
        head = head.next
    }
    // If one list has ended, it will be undefined and we can just take all remaining elements from other list
    // If both have same number of nodes, head.next will be undefined here
    head.next = list1 || list2
    // First element in merged is empty
    // We can't create a new list without adding the first node, just how the constructor works
    return merged.next
}

export function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}