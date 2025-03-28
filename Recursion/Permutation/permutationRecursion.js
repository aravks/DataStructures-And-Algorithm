let str = "abc"

function permutationRecursion(str, result = "") {
    if(!str.length) {
        console.log(result)
        return
    }
    for(let i = 0; i < str.length; i++) {
        permutationRecursion(str.substring(0, i) + str.substring(i + 1, str.length), result + str[i])
    }
}

permutationRecursion(str)
