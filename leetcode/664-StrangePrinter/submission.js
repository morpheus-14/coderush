// Question URL - https://leetcode.com/problems/strange-printer/description/

/**
 * @param {string} s
 * @return {number}
 */

export const strangePrinter = s => {
    const str = removeDuplicates(s)
    const n = str.length
    if (n == 0) return 0

    const dp = Array.from({ length: n }, _ => new Array(n).fill(0))

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = dp[i + 1][j] + 1

            for (let k = i + 1; k <= j; k++) {
                if (str[i] == str[k]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i + 1][k - 1] + dp[k][j])
                }
            }
        }
    }
    return dp[0][n-1]
}

const removeDuplicates = s => {
    let res = []
    res.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) continue
        else res.push(s[i])
    }
    return res.join("")
}