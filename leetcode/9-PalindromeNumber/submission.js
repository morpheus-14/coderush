// Question URL - https://leetcode.com/problems/palindrome-number/description/
/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = x => {
    // Return false if negative or multiple or 10 as no leading digits will have 0
    if (x < 0 || x != 0 && x % 10 == 0) {
        return false
    }

    // Since we are checking for palindrome, we only need to reverse one half of the number and see if it matches with second half
    let reversed = 0

    while (reversed < x) {
        reversed = (reversed * 10) + x % 10
        x = Math.floor(x / 10)
    }

    // even number of digits -> x = reversed
    // odd number of digits -> x = reversed / 10 (as middle digit is omitted)
    return (x == reversed) || (x == Math.floor(reversed / 10))
}