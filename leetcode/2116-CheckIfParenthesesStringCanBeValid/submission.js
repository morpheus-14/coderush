// Question URL - https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
export const canBeValid = (s, locked) => {
    // odd length of s
    if (s.length % 2 != 0) return false

    let minBalance = 0
    let maxBalance = 0
    for (let i = 0; i < s.length; i++) {
        const isOpen = s[i] == "("
        const isUnlocked = locked[i] == "0"
        minBalance += (!isOpen || isUnlocked) ? -1 : 1
        maxBalance += (isOpen || isUnlocked) ? 1 : -1
        if (maxBalance < 0) return false
        minBalance = Math.max(minBalance, 0)
    }

    return minBalance == 0
}


// Attempt to calculate cases valid strings

// var isValid = (s) => {
//     let unbalanced = [], open = []
//     if (
//         s.length % 2 != 0 || // odd number of parentheses
//         s.length == 0 || // empty string
//         s.charAt(0) == ")" || // starts with closing parenthesis
//         s.charAt(s.length - 1) == "(" //end with opening parenthesis
//     ) {
//         return false
//     }
//     const sArr = s.split("")
//     sArr.forEach((ch, idx) => {
//         if (ch === "(") {
//             open = open.concat(idx)
//         } else {
//             if (open.length != 0) {
//                 open = open.slice(0, -1)
//             } else {
//                 unbalanced = unbalanced.concat(idx)
//             }
//         }
//     })
//     unbalanced = open.concat(unbalanced).sort((a, b) => a - b)
//     return unbalanced.length == 0
// }

// export const updateStringAtIdx = (s, idx, c) => {
//     return s.substr(0, idx) + c + s.substr(idx + 1)
// }

// export const changeParenthesis = (ch) => {
//     if (ch == ")") return "("
//     return ")"
// }

// let count = 0

// export const canBeValid = (s, locked) => {
//     console.log("Ss = ", s)
//     console.log("LL =", locked)
//     count++
//     console.log("COUNT", count)
//     if (isValid(s)) {
//         return true
//     } else {
//         if (
//             locked.indexOf('0') == -1 || // not mutable string
//             s.length % 2 != 0 || // odd number of parentheses
//             s.length == 0 // empty string
//         ) {
//             return false
//         } else {
//             const lArr = locked.split("")
//             let indexes = lArr.map((l, idx) => {
//                 if (l == "0") return idx
//                 return null
//             })
//             indexes = indexes.filter(idx => idx !== null)
//             // console.log("IND = ", indexes)
//             let possibleStrs = [ s ]
//             for (let i = 0; i < indexes.length; i++) {
//                 const idx = indexes[i]
//                 const newLocked = updateStringAtIdx(locked, idx, "1")
//                 const changedS = updateStringAtIdx(s, idx, changeParenthesis(s.charAt(idx)))
//                 let nIdx = newLocked.split("").map((l, idx) => {
//                     if (l == "0") return idx
//                     return null
//                 })
//                 nIdx = nIdx.filter(idx => idx !== null)
//                 for (let j = 0; j < nIdx.length; j++) {
//                     possibleStrs.append()
//                     // return canBeValid(s, newLocked) || canBeValid(changedS)
//                     // const unchanged = canBeValid(s, newLocked)
//                     // if (unchanged) {
//                     //     return true
//                     // }
//                     // const changed = canBeValid(changedS, newLocked)
//                     // if (changed) {
//                     //     return true
//                     // }
//                 }
//             }
//             console.log("SL", s, locked)
//             return false
//        }
//     }
// }