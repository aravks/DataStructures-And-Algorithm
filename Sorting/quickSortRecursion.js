// let arr = [6,5,4,3,24,3456,3456,53,2451,6,547,85,8,64846,21]


let arr = [9, 8, 7, 6, 10, 4, 3, 2, 1]


function quickSortRecursion(arr, start, end) {
    if(start >= end) return
    
    let pivot = Math.floor(start + (end - start) / 2)
    let pivotElement = arr[pivot]
    
    let low = start, high = end
    while(low <= high) {
        while(arr[low] < pivotElement) low++
        while(pivotElement < arr[high]) high--
        
        if(low <= high) {
            [arr[low], arr[high]] = [arr[high], arr[low]]
            low++
            high--
        }
    }
    quickSortRecursion(arr, start, high)
    quickSortRecursion(arr, low, end)
}

quickSortRecursion(arr, 0, arr.length - 1)

console.log(arr)
