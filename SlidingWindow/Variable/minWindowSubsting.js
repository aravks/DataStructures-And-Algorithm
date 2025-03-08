let str = 'TOTMTAPTAT', pattern = 'TTA'

function minWindowSubsting(str, pattern) {
    let patternMap = new Map()
    for (let i of pattern) {
        patternMap.set(i, patternMap.get(i) + 1 || 1)
    }
    let count = patternMap.size, i = 0, j = 0, min = Infinity
    while(j < str.length) {
        if(patternMap.has(str[j])) {
            patternMap.set(str[j], patternMap.get(str[j]) - 1)
            count = patternMap.get(str[j]) === 0 ? count - 1 : count
        }
        if(count > 0) {
            j++
        } else if(count === 0) {
            while(count === 0) {
                min = (min < (j - i + 1)) ? min : (j - i + 1)
                if(patternMap.has(str[i])) {
                    patternMap.set(str[i], patternMap.get(str[i]) + 1)
                    count = patternMap.get(str[i]) === 1 ? count + 1 : count
                }
               i++ 
            }
            j++
        }
    }
    return min
}

console.log(minWindowSubsting(str, pattern))
