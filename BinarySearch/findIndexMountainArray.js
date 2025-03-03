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

function findIndexMountainArray(arr, target) {
    let peakIndex = peakIndexMountainArray(arr)
    let answer = binarySearch(arr, 0, peakIndex, target)
    if(answer === -1) {
        answer = binarySearch(arr, peakIndex + 1, arr.length - 1, target, true)
    }
    return answer
}

function binarySearch(arr, start, end, target, decreasing = false) {
    let mid = Math.floor((start + end) / 2)
    
    if(arr[mid] === target) {
        return mid
    } else {
        if(!decreasing) {
            if(target < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if(target < arr[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
}

console.log(findIndexMountainArray(arr, 2))
