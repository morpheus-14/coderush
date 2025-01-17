// Question URL - https://leetcode.com/problems/maximum-subarray/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = (nums) => {
    // Kadane's algorithm

    // Best sum is set to -10000 as lowest number can only be -10000 (-10^4) according to constraints
    let bestSum = -10000
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        bestSum = Math.max(bestSum, currentSum)
    }

    return bestSum
}