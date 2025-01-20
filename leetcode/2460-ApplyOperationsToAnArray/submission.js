// Question URL - https://leetcode.com/problems/apply-operations-to-an-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const applyOperations = nums => {
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
        if (nums[i] != 0) {
            nums[left] = nums[i]
            left++
        }
    }

    while (left < nums.length) {
        nums[left] = 0
        left++
    }

    return nums
}