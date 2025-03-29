function ratMazePrintPathDiagonal(row, col, path = '') {
    if(row === 1 && col === 1) {
        console.log(path)
        return
    }
    if(row > 1 && col > 1) {
        let cross = ratMazePrintPathDiagonal(row - 1, col - 1, path + 'C')
    }
    if(row > 1) {
        let down = ratMazePrintPathDiagonal(row - 1, col, path + 'D')
    }
    if(col > 1) {
        let right = ratMazePrintPathDiagonal(row, col - 1, path + 'R')
    }
    
    // return down + right
}

ratMazePrintPathDiagonal(3, 3)

// CC
// CDR
// CRD
// DCR
// DDRR
// DRC
// DRDR
// DRRD
// RCD
// RDC
// RDDR
// RDRD
// RRDD
