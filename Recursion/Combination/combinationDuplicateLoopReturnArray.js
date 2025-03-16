let arr = [1,2,2,2,2]

function combinationDuplicateLoopReturnArray(arr) {
    arr.sort((a, b) => a - b)
    let outer = [[]]
    let start = 0, end = 0
    for(let i = 0; i < arr.length; i++) {
        let outerLength = outer.length
        if(i > 0 && arr[i] === arr[i - 1]) {
            start = end + 1
        }
        end = outerLength - 1
        for(let j = start; j <= end; j++) {
            // let inner = [...outer[j]] ----> same
            let inner = outer[j].slice()
            inner.push(arr[i])
            outer.push([...inner])
        }
    }
    return outer
}

console.log(combinationDuplicateLoopReturnArray(arr))
