// Question URL - https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description/
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */

export const minimumSize = (nums, maxOperations) => {
    // binary search to find minimum size of largest bag
    let left = 1
    let right = Math.max(...nums)
    // Set to largest num in array initially
    let ans = right

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let ops = 0

        // Get number of operations to get mid as largest bag
        for (const num of nums) {
            ops += Math.floor((num - 1) / mid)
            if (ops > maxOperations) break
        }

        if (ops <= maxOperations) {
            // Can reduce size of largest bag further
            // Search again from left to mid
            ans = mid
            right = mid - 1
        } else {
            // Cannot reduce size of largest bag
            left = mid + 1
        }
    }

    return ans
}