function nQueen(matrix, row = 0, col = 0) {
    if(row === matrix.length) {
        display(matrix)
        return 1
    }
    
    let count = 0
    for(let j = 0; j < matrix[row].length; j++) {
        if(!checkQueenValid(matrix, row, j)) {
            continue
        }
        matrix[row][j] = 'Q'
        count += nQueen(matrix, row + 1, j)
        matrix[row][j] = ' '
    }
    
    return count
}

function checkQueenValid(matrix, row, col) {
    for(let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if(matrix[i][j] === 'Q') return false
    }
    for(let i = row, j = col; i >= 0 && j < matrix[row].length; i--, j++) {
        if(matrix[i][j] === 'Q') return false
    }
    for(let i = row; i >= 0; i--) {
        if(matrix[i][col] === 'Q') return false
    }
    return true
}

function display(result) {
    console.log("==================================")
    for(let i = 0; i < result.length; i++) {
        let str = ""
        for(let j = 0; j < result[i].length; j++) {
            str = str + ' ' + (result[i][j] === 'Q' ? 'Q' : '-')
        }
        console.log(str)
    }
    console.log("==================================")
}

let board = Array.from(Array(8) , row => Array(8).fill(' '))
// console.log(board)
console.log("Possible ways: " + nQueen(board))
