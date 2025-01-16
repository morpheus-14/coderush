// Question URL - https://leetcode.com/problems/jump-game-vii/description/
/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

export const canReach = (s, minJump, maxJump) => {
    // String doesn't end with 0
    if (s.charAt(s.length - 1) !== "0") return false

    // Represents how many indices we can jump from in sliding window ([i - minJump], [i - maxJump]) to reach index i
    let reachable = 0

    // canJump[i] represents if it is possible to jump to index i
    let canJump = Array(s.length).fill(false)
    canJump[0] = true

    for (let i = 1; i < s.length; i++) {
        if (i >= minJump) reachable += (canJump[i - minJump] ? 1 : 0)
        if (i > maxJump) reachable -= (canJump[i - maxJump - 1] ? 1 : 0)
        if (reachable > 0 && s.charAt(i) === "0") {
            canJump[i] = true
        }
    }
    return canJump[s.length - 1]
}