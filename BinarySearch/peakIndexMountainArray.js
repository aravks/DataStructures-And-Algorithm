// let arr = [1, 3, 5, 6, 7, 9, 32, 56, 67, 78, 89, 93]
let arr = [1, 3, 5, 7, 10, 2, 1]

function peakIndexMountainArray(arr) {
    let length = arr.length
    let start = 0, end = length - 1
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2)
        
        if(arr[mid] > arr[mid + 1]) {
            end = mid
        } else if(arr[mid] < arr[mid + 1]) {
            start = mid + 1
        }
    }
    return start
}

console.log(peakIndexMountainArray(arr))
