let arr = [6,5,4,3,24,3456,3456,53,2451,6,547,85,8,64846,21]



function quickSortRecursion(arr) {
    if(arr.length === 1) return arr
    
    let start = 0, end = arr.length - 1
    let pivot = Math.floor(start + (end - start) / 2)
    
    let i = start, j = end
    while(i < j) {
        while(arr[i] < arr[pivot]) {
            i++
        }
        while(arr[pivot] < arr[j]) {
            j--
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    
    let left = quickSortRecursion(arr.slice(start, pivot + 1))
    let right = quickSortRecursion(arr.slice(pivot + 1, arr.length))
    
    arr = left.concat(right)
    
    return arr
}

console.log(quickSortRecursion(arr))
