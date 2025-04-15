// Question URL - https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/description

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */

export const maxCount = (banned, n, maxSum) => {
    let bannedSet = {}, bannedSum = 0
    for (let i = 0; i < banned.length; i++) {
        const curr = banned[i]
        if (bannedSet[curr] == 1 || curr > maxSum || curr > n) continue
        bannedSet[curr] = 1
        bannedSum += curr
    }
    const allowedSum = (n * (n + 1) / 2) - bannedSum
    if (allowedSum <= maxSum) return n - Object.keys(bannedSet).length
    let sum = 0, count = 0
    for (let i = 1; i <= n; i++) {
        if (bannedSet[i] == 1) continue
        sum += i
        if (sum > maxSum) return count
        count++
    }
}