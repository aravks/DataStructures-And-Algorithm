let arr = [1, 2, 3, 4, 5, 6, 7, 0]

function findPivot(arr) {
    let length = arr.length
    let start = 0, end = length - 1
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if(arr[mid] > arr[mid + 1]) {
            return mid
        } else if(arr[mid] < arr[mid + 1] && arr[mid] < arr[end]) {
            end = mid
        } else if(arr[mid] < arr[mid + 1] && arr[mid] > arr[end]) {
            start = mid + 1
        }
    }
    return -1
}

function findIndexRotatedSortedArray(arr, target) {
    let pivot = findPivot(arr)
    let ans = binarySearch(arr, 0, pivot, target)
    if(ans === -1) {
        ans = binarySearch(arr, pivot + 1, arr.length - 1, target)
    }
    return ans
}

function binarySearch(arr, start, end, target) {
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if(arr[mid] === target) {
            return mid
        } else if(target < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

console.log(findIndexRotatedSortedArray(arr, 0))
