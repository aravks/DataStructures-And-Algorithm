let arr = [2, 2, 9, 2, 2]

function findPivot(arr) {
    let length = arr.length
    let start = 0, end = length - 1
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if(mid < end && arr[mid] > arr[mid + 1]) {
            return mid
        } else if(start < mid && arr[mid - 1] > arr[mid]) {
            return mid - 1
        }
        
        if(arr[start] === arr[mid] && arr[mid] === arr[end]) {
            if(arr[start] > arr[start + 1]) {
                return start
            }
            start++
            if(arr[end - 1] > arr[end]) {
                return end - 1
            }
            end--
        } else if(arr[start] < arr[mid] || arr[start] === arr[mid] && arr[mid] > arr[end]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}

function findIndexRotatedSortedArrayDuplicates(arr, target) {
    let pivot = findPivot(arr)
    if(pivot == -1) {
        return binarySearch(arr, 0, arr.length - 1, target)
    }
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

console.log(findIndexRotatedSortedArrayDuplicates(arr, 2))
