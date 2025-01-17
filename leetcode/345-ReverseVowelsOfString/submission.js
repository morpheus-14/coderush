// Question URL - https://leetcode.com/problems/reverse-vowels-of-a-string/description/
/**
 * @param {string} s
 * @return {string}
 */

export const reverseVowels = s => {
    const sArr = s.split("")
    let left = 0
    let right = s.length - 1

    while (left < right) {
        // move pointer till reaching a vowel
        while (left < right && !isVowel(sArr[left])) {
            left++
        }
        while (left < right && !isVowel(sArr[right])) {
            right--
        }
        // Swap vowels
        const temp = sArr[left]
        sArr[left] = sArr[right]
        sArr[right] = temp
        left++
        right--
    }

    return sArr.join("")
}

const isVowel = char => {
    char = char.toLowerCase()
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false
}