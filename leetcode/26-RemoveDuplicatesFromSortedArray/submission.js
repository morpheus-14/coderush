// Question URL - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = nums => {
    let idx = 1
    for (let i = 1; i < nums.length; i++) {
        // We've reached the largest element we dont need to check any further
        // as nums is already sorted in non decreasing order
        if (nums[i - 1] == nums[nums.length - 1]) {
            break
        }
        if (nums[i] != nums[i - 1]) {
            nums[idx] = nums[i]
            idx++
        }
    }
    return idx
}