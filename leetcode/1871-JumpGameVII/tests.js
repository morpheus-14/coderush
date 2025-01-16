import { canReach } from "./submission.js"

function init() {
    const tests = [
        {
            s: "011010",
            minJump: 2,
            maxJump: 3
        },
        {
            s: "01101110",
            minJump: 2,
            maxJump: 3
        },
        {
            s: "0000000000",
            minJump: 2,
            maxJump: 5
        },
        {
            s: "01000110110",
            minJump: 2,
            maxJump: 3
        },
        {
            s: "00111010",
            minJump: 3,
            maxJump: 5
        },
        {
            s: "0000000000",
            minJump: 8,
            maxJump: 8
        },
    ]


    tests.forEach(({ s, minJump, maxJump }) => {
        console.log(`${s} -> Min - ${minJump}, Max - ${maxJump} --> ${canReach(s, minJump, maxJump)}`)
    })
}

init()