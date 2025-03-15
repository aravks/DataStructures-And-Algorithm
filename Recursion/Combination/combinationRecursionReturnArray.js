let str = 'abc'

function combinationRecursionReturnArray(str, ans) {
    let combination = []
    
    if(str.length < 1) {
        combination.push(ans)
        return combination
    }
    
    let left = combinationRecursionReturnArray(str.substring(1), ans + str[0])
    let right = combinationRecursionReturnArray(str.substring(1), ans)
    combination = left.concat(right)
    return combination
}

console.log(combinationRecursionReturnArray(str, ''))
