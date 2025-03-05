let arr = [6,5,4,3,21]



function bubbleSort(arr) {
    for(let pass = arr.length - 1; pass > 0 ; pass--) {
        for(let j = 0; j < pass; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))
