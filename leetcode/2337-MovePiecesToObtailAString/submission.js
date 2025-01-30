/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */

export const canChange = (start, target) => {
    if (start == target) return true
    let waitL = 0
    let waitR = 0

    for (let i = 0; i < start.length; i++) {
        let curr = start.charAt(i)
        let goal = target.charAt(i)
        if (curr == "R") {
            if (waitL > 0) return false
            waitR++
        }
        if (goal == "L") {
            if (waitR > 0) return false
            waitL++
        }
        if (goal == "R") {
            if (waitR == 0) return false
            waitR--
        }
        if (curr == "L") {
            if (waitL == 0) return false
            waitL--
        }
    }
    return waitL == 0 && waitR == 0
}