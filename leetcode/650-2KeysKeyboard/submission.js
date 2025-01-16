/**
 * @param {number} n
 * @return {number}
 */

export const minSteps = n => {
    if (n % 2 === 1) {
        // Odd case
        // n = 1
        if (n === 1) return 0
        const biggestFactor = getBiggestFactor(n)
        if (biggestFactor === 1) {
            // Prime
            return n
        } else {
            return minSteps(biggestFactor) + n / biggestFactor
        }
    } else {
       // Even case
       return minSteps(n / 2) + 2
    }
}

const getBiggestFactor = num => {
    let result = 1
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            result = num / i
            break
        }
    }
    return result
}