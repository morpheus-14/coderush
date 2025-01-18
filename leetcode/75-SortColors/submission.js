// Question URL - https://leetcode.com/problems/sort-colors/description/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const sortColors = nums => {
    let count = {
        "0": 0,
        "1": 0,
        "2": 0,
    }
    for (let i = 0; i< nums.length; i++) {
        let num = nums[i]
        count[num]++
    }

    let idx = 0
    let lastIdx = 0
    for (let i = 0; i < 3; i++) {
        while (idx < lastIdx + count[i]) {
            nums[idx] = i
            idx++
        }
        lastIdx = idx
    }
}