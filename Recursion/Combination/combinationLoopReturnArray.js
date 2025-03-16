let arr = [1,2,3]

function combinationLoopReturnArray(arr) {
    let outer = [[]]
    for(let i of arr) {
        let outerLength = outer.length
        for(let j = 0; j < outerLength; j++) {
            // let inner = [...outer[j]] ----> same
            let inner = outer[j].slice()
            inner.push(i)
            outer.push([...inner])
        }
    }
    return outer
}

console.log(combinationLoopReturnArray(arr))
