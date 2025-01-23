import { vowelStrings } from "./submission.js"

const init = () => {
    const tests = [
        { words: ["aba","bcb","ece","aa","e"], queries: [[0,2],[1,4],[1,1]] },
        { words: ["a","e","i"], queries: [[0,2],[0,1],[2,2]] },
        { words: ["aba","bcb","ece","aa","efg"], queries: [[1,2],[1,4],[3,4]] },
        { words: ["a", "b", "e", "c", "i", "d", "o", "f", "u", "g"], queries:[[0, 2], [1, 4], [2, 5], [3, 7]]}
    ]

    tests.forEach(({ words, queries }) => {
        console.log(`Words: ${words.slice(0, 20)} \n Queries: ${queries.slice(0, 20)} -> ${vowelStrings(words, queries).slice(0, 20)}`)
    })
}

init()