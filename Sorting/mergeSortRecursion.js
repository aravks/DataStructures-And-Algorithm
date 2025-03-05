let arr = [6,5,4,3,21]



function mergeSortRecursion(arr) {
    if(arr.length === 1) return arr
    
    let start = 0, end = arr.length - 1
    let mid = Math.floor(start + (end - start) / 2)
    
    let left = mergeSortRecursion(arr.slice(start, mid + 1))
    let right = mergeSortRecursion(arr.slice(mid + 1, arr.length))
    
    let i = 0, j = 0, k = 0, newArr = []
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            newArr.push(left[i])
            i++
        } else {
            newArr.push(right[j])
            j++
        }
    }
    while(i < left.length) {
        newArr.push(left[i])
        i++
    }
    while(j < right.length) {
        newArr.push(right[j])
        j++
    }
    return newArr
}

console.log(mergeSortRecursion(arr))
