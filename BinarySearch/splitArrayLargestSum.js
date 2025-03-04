// THOUGHT PROCESS

// [7, 2, 5, 8, 10]

// Calculating range of sum for each pieces:
// 1 -> 32
// 2 -> 18
// 2 -> 22
// 2-> 23
// 2 -> 25
// ...
// 5 -> 10

// so, ans is within [10, 32]

// so, pieces are inversely proportional to sum
// pieces increase, sum decrease
// pieces decrease, sum increase

// if given pieces < current pieces => then, decrease pieces, means increase sum, means search for sum above mid, start = mid + 1
// if given pieces >= current pieces => then, increase pieces, means decrease sum, means search for sum less than or equal to mid, end = mid


let arr = [7, 2, 5, 10, 8]

function splitArrayLargestSum(arr, givenPieces) {
    // Find ans range => range of sum
    let start = 0, end = 0 // start = 5 pieces(max in array), end = 1 piece(sum of array)
    for(let i of arr) {
        start = start < i ? i : start
        end += i
    }
    // console.log(start, end)
    
    return binarySearch(arr, start, end)
    
    function binarySearch(arr, start, end) {
        while(start < end) {
            let mid = Math.floor(start + ((end - start) / 2))
        
            let sum = 0, currentPieces = 1
            for(let i of arr) {
                if(sum + i <= mid) {
                    sum += i
                } else {
                    sum = i
                    currentPieces++
                }
            }
            
            if(currentPieces <= givenPieces) {
                end = mid
            } else {
                start = mid + 1
            }
        }
        return start
    }
}

console.log(splitArrayLargestSum(arr, 2))
