function ratMazePrintPath(row, col, path = '') {
    if(row === 1 && col === 1) {
        console.log(path)
        return
    }
    if(row > 1) {
        let down = ratMazePrintPath(row - 1, col, path + 'D')
    }
    if(col > 1) {
        let right = ratMazePrintPath(row, col - 1, path + 'R')
    }
    
    // return down + right
}

ratMazePrintPath(3, 3)

// DDRR
// DRDR
// DRRD
// RDDR
// RDRD
// RRDD
