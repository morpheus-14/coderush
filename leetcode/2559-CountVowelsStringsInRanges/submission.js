// Question URL - https://leetcode.com/problems/count-vowel-strings-in-ranges/description/
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

export const vowelStrings = (words, queries) => {
    let count = 0
    // Precomute array for sum of words starting and ending with vowels from index 0 till index i
    const vowelWords = words.map(word=> {
        if (isVowel(word.charAt(0)) && isVowel(word.charAt(word.length - 1))) {
            count++
        }
        return count
    })
    let ans = []
    for (let q = 0; q < queries.length; q++) {
        const query = queries[q]
        ans.push(vowelWords[query[1]] - (query[0] == 0 ? 0 : vowelWords[query[0] - 1]))
    }
    return ans
}

const isVowel = char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false