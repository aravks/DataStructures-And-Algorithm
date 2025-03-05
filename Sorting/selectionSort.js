let arr = [6,5,4,3,21]



function selectionSort(arr) {
    let last = arr.length - 1
    
    for(let pass = 0; pass < arr.length - 2; pass++) {
        let max = 0
        for(let i = 0; i <= last; i++) {
            max = (arr[i] > arr[max]) ? i : max
        }
        [arr[max], arr[last]] = [arr[last], arr[max]]
        last--
    }
    return arr
}

console.log(selectionSort(arr))
