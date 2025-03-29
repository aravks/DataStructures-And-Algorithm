function ratMazeReturnPathWithObstacles(row, col, maze, path = "") {
    let resultArray = []
    if(!maze[row][col]) {
        return []
    }
    if(row === maze.length - 1 && col === maze[row].length - 1) {
        resultArray.push(path)
        return resultArray
    }
    
    let down = [], right = []
    if(row < maze.length - 1) {
        down = ratMazeReturnPathWithObstacles(row + 1, col, maze, path + "D")
    }
    if(col < maze[row].length - 1) {
        right = ratMazeReturnPathWithObstacles(row, col + 1, maze, path + "R")
    }
    
    resultArray = down.concat(right)
    
    return resultArray
}

let maze = [
        [true, true, true],
        [true, false, true],
        [true, true, true]
    ]
    
    
console.log(ratMazeReturnPathWithObstacles(0, 0, maze))

// [ 'DDRR', 'RRDD' ]
