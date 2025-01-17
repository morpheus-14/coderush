// Question URL - https://leetcode.com/problems/decode-string/description/
/**
 * @param {string} s
 * @return {string}
 */


export const decodeString = s => {
    let number = ""
    let stack = []
    let current = ""

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)

        if (char >= '0' && char <= '9') {
            // number
            // add to previous number - string concat, not math add
            number += char
        }
        if (char.toUpperCase() != char.toLowerCase()) {
            // letters
            current += char
        }
        if (char === "[") {
            // new group
            // push already decoded to stack and decode new group inside []
            stack.push({ number, str: current })
            current = ""
            number = ""
        }
        if (char === "]") {
            // group decoded
            // pop from stack and append decoded string to previously decoded
            const prev = stack.pop()
            current = prev.str + current.repeat(prev.number)
        }
    }
    return current
}