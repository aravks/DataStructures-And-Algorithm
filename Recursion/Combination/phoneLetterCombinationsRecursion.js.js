let str = "23"

let phone = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']


function phoneLetterCombinationsRecursion(unprocessed, processed = "") {
    let resultArray = []
    // base condition
    if(!unprocessed.length) {
        resultArray.push(processed)
        return resultArray
    }
    
    // call recursion
    let currentNumber = unprocessed[0]
    for(let i = 0; i < phone[currentNumber].length; i++) {
        let result = phoneLetterCombinationsRecursion(unprocessed.substring(1), processed + phone[currentNumber][i])
        
        resultArray = resultArray.concat(result)
    }
    
    return resultArray
}

console.log(phoneLetterCombinationsRecursion(str))

// [
//   'ad', 'ae', 'af',
//   'bd', 'be', 'bf',
//   'cd', 'ce', 'cf'
// ]
