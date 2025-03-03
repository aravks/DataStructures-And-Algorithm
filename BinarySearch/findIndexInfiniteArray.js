// let arr = [1, 3, 5, 6, 7, 9, 32, 56, 67, 78, 89, 93]
let arr = [1, 3, 5]

function callSearch(arr, target) {
    let start = 0, end = 1
    while(arr[end] < target) {
        let newStart = end + 1
        end = end + ((end - start + 1) * 2)
        start = newStart
    }
    // console.log(start, end)
    return binSearch(arr, start, end, target)
}


function binSearch(arr, start, end, target) {
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        // console.log(arr[mid])
        if(!arr[mid]) {
            end = mid - 1
        } else if(arr[mid] === target) {
            return mid
        } else if(arr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

console.log(callSearch(arr, 5))
