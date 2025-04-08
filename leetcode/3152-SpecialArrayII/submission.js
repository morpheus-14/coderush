// Question URL - https://leetcode.com/problems/special-array-ii/description/
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */

export const isArraySpecial = (nums, queries) => {
    let specialNums = [0]
    for (let i = 1; i < nums.length; i++) {
        specialNums[i] = specialNums[i - 1] + (nums[i] % 2 == nums[i - 1] % 2 ? 1 : 0)
    }
    let ans = []
    for (let i = 0; i < queries.length; i++) {
        let [left, right] = queries[i]
        if (right == left) ans[i] = true
        else ans[i] = (specialNums[right] - (left > 0 ? specialNums[left] : 0)) == 0
    }
    return ans
}

// TLE
// return queries.map(q => {
//     const subArray = nums.slice(q[0], q[1] + 1)
//     for (let i = 0; i < q[1] - q[0]; i++) {
//         if (subArray[i] % 2 == subArray[i + 1] % 2) return false
//     }
//     return true
// })


// Also TLE
// let specialNums = []
// for (let i = 0; i < nums.length; i++) {
//     specialNums.push(nums[i] % 2 != nums[i + 1] % 2)
// }
// let ans = []
// for (let i = 0; i < queries.length; i++) {
//     let query = queries[i]
//     if (query[0] == query[1]) {
//         ans[i] = true
//         continue
//     }
//     for (let j = query[0]; j < query[1]; j++) {
//         ans[i] = (ans[i] || true) && specialNums[j]
//         if (!ans[i]) break
//     }
// }
// return ans