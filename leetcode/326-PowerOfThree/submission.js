// Question URL - https://leetcode.com/problems/power-of-three/description/
/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfThree = (n) => {
    // 1. Basic log method
    const power = Math.log10(n) / Math.log10(3)
    if (Number.isInteger(power)) {
        return true
    } else {
        return false
    }
    // 2. Recursive loop method (Calculate the root)
    // if (n <= 0) return false
    // if (n % 3 == 0) return isPowerOfThree(n / 3)
    // if (n == 1) return true
    // return false
}