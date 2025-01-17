// Question URL - https://leetcode.com/problems/roman-to-integer/description/
/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = s => {
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let num = 0
    for (let i = 0; i < s.length; i++) {
        let digit = s.charAt(i)
        // if the next char is larger than current
        // its subtraction as roman is usually written largest to smallest
        // At i = s.length, roman[s[i + 1]] = undefined so value will always be added
        if (roman[digit] < roman[s.charAt(i + 1)]) {
            num -= roman[digit]
        } else {
            num += roman[digit]
        }
    }
    return num
}