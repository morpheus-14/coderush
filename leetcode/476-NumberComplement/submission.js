/**
 * @param {number} n
 * @return {boolean}
 */

export const findComplement = n => {
    const bin = (n >>> 0).toString(2)
    const comp = bin.split("").map(flipdigit).join("")
    return parseInt(comp, 2)
}

const flipdigit = digit => {
    if (digit == "0") return "1"
    return "0"
}