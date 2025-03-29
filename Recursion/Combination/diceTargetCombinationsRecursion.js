let target = 4


function diceTargetCombinationsRecursion(unprocessed, processed = "") {
    let resultArray = []
    // base condition 1
    if(!unprocessed) {
        resultArray.push(processed)
        return resultArray
    }
    // base condition 2
    if(unprocessed < 0) return resultArray
    
    // call recursion
    // For avoiding base condition 2, use for(let i = 1; i <= 6 && i <= target; i++) {
    for(let i = 1; i <= 6; i++) {
        let result = diceTargetCombinationsRecursion(unprocessed - i, processed + i)
        resultArray = resultArray.concat(result)
    }
    
    return resultArray
}

console.log(diceTargetCombinationsRecursion(target))

// [
//   '1111', '112',
//   '121',  '13',
//   '211',  '22',
//   '31',   '4'
// ]
