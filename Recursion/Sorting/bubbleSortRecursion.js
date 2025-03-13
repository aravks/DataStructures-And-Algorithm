function bubbleSortRecursion(arr, start, end) {
    if(start >= end) {
        return
    }
    
    for(let i = start; i <= end - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
    bubbleSortRecursion(arr, start, end - 1)
}

let arr = [2, 6, 8, 3, 9, 1, 21, 4, 5]

bubbleSortRecursion(arr, 0, arr.length - 1)

console.log(arr)
