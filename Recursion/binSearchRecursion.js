function binSearchRecursion(arr, target, start = 0, end = arr.length - 1) {
    if(arr.length === 0) return -1
    if(arr.length === 1) return (arr[start] === target) ? start : -1
    if(start > end) return -1
    
    let mid = Math.floor(start + (end - start) / 2)
    
    if(arr[mid] === target) {
        return mid
    }
    if(arr[mid] < target) {
        return binSearchRecursion(arr, target, mid + 1, end)
    }
    if(arr[mid] > target) {
        return binSearchRecursion(arr, target, start, mid - 1)
    }
}

let arr1 = [2, 3, 6, 7, 9, 23, 54, 75]
console.log(binSearchRecursion(arr1, 23))
