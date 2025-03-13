function selectionSortRecursion(arr, start, end) {
    if(start >= end) {
        return
    }
    
    let highest = -Infinity
    for(let i = start; i <= end; i++) {
        highest = arr[highest] > arr[i] ? highest : i
    }
    [arr[highest], arr[end]] = [arr[end], arr[highest]]
    selectionSortRecursion(arr, start, end - 1)
}

let arr = [2, 6, 8, 3, 9, 1, 21, 4, 5]

selectionSortRecursion(arr, 0, arr.length - 1)

console.log(arr)
