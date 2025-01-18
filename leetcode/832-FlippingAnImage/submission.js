// Question URL - https://leetcode.com/problems/flipping-an-image/description/
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
export const flipAndInvertImage = image => {
    let n = image[0].length - 1
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < (image[0].length/2); j++) {
            // if left and right are same flip them
            // if they are different dont do anything (as reversing + flipping will get back to same state)
            if (image[i][j] == image[i][n - j]) {
                image[i][j] = image[i][j] ^ 1
                image[i][n - j] = image[i][j]
            }
        }
    }
    return image
}