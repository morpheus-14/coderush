// Question URL - https://leetcode.com/problems/add-two-numbers/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export const twoSum = (nums, target) => {
    // Use js Map instead of object
    // Refer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
    // This can only work because of the constraint that says there can be only one valid answer
    // Which means that if there are duplicate values in the array which add to the target, they have be in pairs
    // and we dont need to care about the first instance the index being overriden by adding to map
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement)) {
            const res =  [ map.get(complement), i ]
            return res
        }
        map.set(nums[i], i)
    }
    // If map doesn't have the complement return an empty array as no pair can add up to target
    return []
}