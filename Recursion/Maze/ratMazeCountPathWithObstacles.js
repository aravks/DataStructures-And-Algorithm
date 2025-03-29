function ratMazeCountPathWithObstacles(row, col, maze) {
    if(!maze[row][col]) {
        return 0
    }
    if(row === maze.length - 1 && col === maze[row].length - 1) {
        return 1
    }
    
    let down = 0, right = 0
    if(row < maze.length - 1) {
        down = ratMazeCountPathWithObstacles(row + 1, col, maze)
    }
    if(col < maze[row].length - 1) {
        right = ratMazeCountPathWithObstacles(row, col + 1, maze)
    }
    
    return down + right
}

let maze = [
        [true, true, true],
        [true, false, true],
        [true, true, true]
    ]
    
    
console.log(ratMazeCountPathWithObstacles(0, 0, maze))

// 2
