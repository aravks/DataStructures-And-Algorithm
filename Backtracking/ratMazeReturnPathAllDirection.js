function ratMazeReturnPathAllDirection(maze, row = 0, col = 0, path = "") {
    let resultArray = []
    if(!maze[row][col]) {
        return resultArray
    }
    
    if(row === maze.length - 1 && col === maze[row].length - 1) {
        resultArray.push(path)
        return resultArray
    }
    
    maze[row][col] = false
    
    let down = [], right = [], up = [], left = []
    if(row < maze.length - 1) {
        down = ratMazeReturnPathAllDirection(maze, row + 1, col, path + "D")
    }
    if(col < maze[row].length - 1) {
        right = ratMazeReturnPathAllDirection(maze, row, col + 1, path + "R")
    }
    if(row > 0) {
        up = ratMazeReturnPathAllDirection(maze, row - 1, col, path + "U")
    }
    if(col > 0) {
        left = ratMazeReturnPathAllDirection(maze, row, col - 1, path + "L")
    }
    
    maze[row][col] = true
    
    resultArray = down.concat(right, up, left)
    
    return resultArray
}

let maze = [
        [true, true, true],
        [true, true, true],
        [true, true, true],
    ]
    
console.log(ratMazeReturnPathAllDirection(maze))

// [
//   'DDRR',     'DDRURD',
//   'DDRUURDD', 'DRDR',
//   'DRRD',     'DRURDD',
//   'RDDR',     'RDRD',
//   'RDLDRR',   'RRDD',
//   'RRDLDR',   'RRDLLDRR'
// ]
