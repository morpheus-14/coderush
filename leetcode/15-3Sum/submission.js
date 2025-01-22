// Question URL - https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export const threeSum = nums => {
  let res = []
  nums.sort((a, b) => (a - b))
  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i]
    if (a > 0) break
    if (i > 0 && a === nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const b = nums[j]
      const c = nums[k]
      const sum = a + b + c
      if (sum > 0) k--
      else if (sum < 0) j++
      else if (sum == 0) {
        res.push([a, b, c])
        while (j < k && b === nums[j + 1]) j++
        while (j < k && c === nums[k - 1]) k--
        j++
        k--
      }
    }
  }
  return res
}