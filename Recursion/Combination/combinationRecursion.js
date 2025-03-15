let str = 'abc'

function combinationRecursion(str, ans) {
    if(str.length < 1) {
        console.log(ans)
        return
    }
    
    combinationRecursion(str.substring(1), ans)
    combinationRecursion(str.substring(1), ans + str[0])
}

combinationRecursion(str, '')
