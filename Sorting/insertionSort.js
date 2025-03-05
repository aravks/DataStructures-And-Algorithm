let arr = [6,5,4,3,21]



function insertionSort(arr) {
    for(let pass = 1; pass < arr.length; pass++) {
        for(let j = pass; j > 0; j--) {
            if(arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            } else {
                break
            }
        }
    }
    return arr
}

console.log(insertionSort(arr))
