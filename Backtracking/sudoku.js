function sudoku(matrix) {
    let row = -1, col = -1
    
    let emptyLeft = true
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                row = i
                col = j
                emptyLeft = false
                break
            }
        }
        if(!emptyLeft) {
            break
        }
    }
    // console.log(row, col)
    if(emptyLeft) {
        // sudoku is solved
        return true
    }
    // console.log("working..")
    for(let num = 1; num <= 9; num++) {
        // console.log("working...")
        // console.log(checkNumberValid(matrix, row, col, num))
        if(checkNumberValid(matrix, row, col, num)) {
            matrix[row][col] = num
            if(sudoku(matrix)) {
                return true
            } else {
                matrix[row][col] = 0
            }
        }
    }
    
    return false
}

function checkNumberValid(matrix, row, col, num) {
    // console.log("entered")
    for(let j = 0; j < matrix[row].length; j++) {
        if(matrix[row][j] === num) {
            return false
        }
    }
    // console.log("done1")
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][col] === num) {
            return false
        }
    }
    // console.log("done2")
    let boardSqrt = Math.sqrt(board.length)
    // console.log(boardSqrt)
    let rowStart = row - (row % boardSqrt)
    let colStart = col - (col % boardSqrt)
    // console.log(boardSqrt, rowStart, colStart)
    for(let i = rowStart; i < (rowStart + boardSqrt); i++) {
        for(let j = colStart; j < (colStart + boardSqrt); j++) {
            if(matrix[i][j] === num) {
                return false
            }
        }
    }
    // console.log("exitted")
    return true
}

function display(result) {
    console.log("==================================")
    for(let i = 0; i < result.length; i++) {
        let str = ''
        for(let j = 0; j < result[i].length; j++) {
            str = str + ' ' + (result[i][j])
        }
        console.log(str)
    }
    console.log("==================================")
}

// let board = Array.from(Array(9) , row => Array(9).fill(0))
let board = [
                [3, 0, 6, 5, 0, 8, 4, 0, 0],
                [5, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 8, 7, 0, 0, 0, 0, 3, 1],
                [0, 0, 3, 0, 1, 0, 0, 8, 0],
                [9, 0, 0, 8, 6, 3, 0, 0, 5],
                [0, 5, 0, 0, 9, 0, 6, 0, 0],
                [1, 3, 0, 0, 0, 0, 2, 5, 0],
                [0, 0, 0, 0, 0, 0, 0, 7, 4],
                [0, 0, 5, 2, 0, 6, 3, 0, 0]
        ];
// console.log(board)
// console.log("Possible ways: " + sudoku(board))

if(sudoku(board)) {
    display(board)
}
