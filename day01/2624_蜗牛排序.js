/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
// Array.prototype.snail = function(rowsCount, colsCount) {
//     if (this.length !== rowsCount*colsCount)
//         return []
//     let res = []
//     for (let i = 0; i < rowsCount; i++) {
//         res.push(new Array(colsCount).fill(0))
//     }
//     let start = 0
//     let flag = true
//     for (let i = 0; i < colsCount; i++) {
//         for (let j = 0; j < rowsCount; j++) {
//             if (flag){
//                 res[j][i] = this[start]
//             }else {
//                 res[rowsCount-1 - j][i] = this[start]
//             }
//             start++
//             if (j === rowsCount - 1){
//                 flag = !flag
//             }
//         }
//     }
//     return res
// }

Array.prototype.snail = function(rowsCount, colsCount) {
    if (this.length !== rowsCount*colsCount)
        return []
    let res = []
    for (let i = 0; i < rowsCount; i++) {
        res.push(new Array(colsCount).fill(0))
    }
    let row = 0
    let col = 0
    let flag = true
    for (const item of this) {
        res[row][col] = item
        if (flag){
            row++
        }else{
            row--
        }
        if (flag && row === rowsCount){
            col++
            row--
            flag = !flag
        }else if (!flag && row === -1){
            flag = !flag
            row++
            col++
        }

    }
    return res
}

let arr = [1,2,3,4,5,6,7,8].snail(2,4)
console.log(arr)

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
