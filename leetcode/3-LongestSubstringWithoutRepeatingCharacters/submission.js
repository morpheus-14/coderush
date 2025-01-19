// Question URL - https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = (s) => {
    if (s.length == 0) return 0
    let longest = -1
    let current = 1
    const sArr = s.split("")

    let unique = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (unique.indexOf(sArr[i]) == -1) {
            unique.push(sArr[i])
            current++
        } else {
            longest = Math.max(longest, current)
            current-=unique.indexOf(sArr[i])
            unique = unique.slice(unique.indexOf(sArr[i]) + 1).concat(sArr[i])
        }
    }
    longest = Math.max(longest, current)
    return longest
}