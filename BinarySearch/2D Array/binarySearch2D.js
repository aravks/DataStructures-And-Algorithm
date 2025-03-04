let arr = [
        [10, 20, 30, 40],
        [15, 25, 35, 45],
        [28, 29, 37, 49],
        [33, 34, 38, 50]
    ]
    
    
function binarySearch2D(arr, target) {
    let row = 0, col = arr[0].length - 1
    
    while(row < arr.length && 0 <= col) {
        if(target === arr[row][col]) {
            return [row, col]
        }
        if(target < arr[row][col]) {
            col = col - 1
        } else if(target > arr[row][col]) {
            row = row + 1
        }
    }
    return [-1, -1]
}


console.log(binarySearch2D(arr, 49))
