function ratMazeCountPath(row, col) {
    if(row === 1 || col === 1) return 1
    
    let down = ratMazeCountPath(row - 1, col)
    let right = ratMazeCountPath(row, col - 1)
    
    return down + right
}

console.log(ratMazeCountPath(3, 3))

// 6
