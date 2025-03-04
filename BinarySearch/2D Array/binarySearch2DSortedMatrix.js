let arr = [
        [3, 4, 7, 9],
        [12, 13, 16, 18],
        [20, 21, 23, 29]
    ]
    
function binarySearch2DSortedMatrix(arr, target) {
    let rStart = 0, rEnd = arr.length - 1, cStart = 0, cEnd = arr[0].length - 1
    
    
    while(rStart <= rEnd && cStart <= cEnd) {
        let rMid = Math.floor((rStart + rEnd) / 2)
        
        if(arr[rMid][cStart] === target) {
            return [rMid, cStart]
        } else if(arr[rMid][cEnd] === target) {
            return [rMid, cEnd]
        }
        
        if(arr[rMid][cStart] < target && target < arr[rMid][cEnd]) {
            return binarySearch(arr, rMid, target)
        } else if(arr[rMid][cStart] > target) {
            rEnd = rMid - 1
        } else if(arr[rMid][cEnd] < target) {
            rStart = rMid + 1
        }
    }
    return [-1, -1]
}
    
function binarySearch(arr, row, target) {
    
    let cStart = 0, cEnd = arr[row].length - 1
    
    while(cStart <= cEnd) {
        let cMid = Math.floor((cStart + cEnd) / 2)
        
        if(target === arr[row][cMid]) {
            return [row, cMid]
        }
        if(target < arr[row][cMid]) {
            cEnd = cMid - 1
        } else if(target > arr[row][cMid]) {
            cStart = cMid + 1
        }
    }
    return [-1, -1]
}


console.log(binarySearch2DSortedMatrix(arr, 21))
