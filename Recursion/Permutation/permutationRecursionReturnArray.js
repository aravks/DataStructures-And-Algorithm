let str = "abc"

function permutationRecursionReturnArray(str, result = "") {
    let resultArray = []
    if(!str.length) {
        resultArray.push(result)
        // console.log(resultArray)
        return resultArray
    }
    for(let i = 0; i < str.length; i++) {
        let permutation = permutationRecursionReturnArray(str.substring(0, i) + str.substring(i + 1, str.length), result + str[i])
        // resultArray.push(...permutation)
        resultArray = resultArray.concat(permutation)
    }
    return resultArray
}

console.log(permutationRecursionReturnArray(str))
