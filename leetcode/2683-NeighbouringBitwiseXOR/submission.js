// Question URL - https://leetcode.com/problems/neighboring-bitwise-xor/
/**
 * @param {number[]} derived
 * @return {boolean}
 */

export const doesValidArrayExist = function(derived) {
    let sum = 0
    const len = derived.length
    for (let i = 0; i < len; i++) {
        sum ^= derived[i]
    }
    return sum == 0
}