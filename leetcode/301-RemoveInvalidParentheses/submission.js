// Question URL - https://leetcode.com/problems/remove-invalid-parentheses/description
/**
 * @param {string} s
 * @return {string[]}
 */

export const removeInvalidParentheses = (s) => {
    let queue = [ s ]
    let visited = new Set()
    let ans = []
    let done = false
    while (queue.length > 0) {
        const curr = queue.shift()
        if (isValid(curr)) {
            ans = ans.concat(curr)
            done = true
        }

        if (!done) {
            for (let i = 0; i < curr.length; i++) {
                if (curr[i] == '(' || curr[i] == ')') {
                    const temp = curr.substring(0, i) + curr.substring(i + 1)
                    if (!visited.has(temp)) {
                        visited.add(temp)
                        queue.push(temp)
                    }
                    // Skip removing next char if its same as current character
                    if (curr[i] == '(') while (curr[i + 1] == '(') i++
                    else while(curr[i + 1] == ')') i++
                }
            }
        }
    }
    return ans
}

export const isValid = (s) => {
    let ctr = 0
    for (let ch of s) {
        if (ch === "(") ctr++
        if (ch === ")") ctr-- 
        if (ctr < 0) return false
    }
    return ctr == 0
}