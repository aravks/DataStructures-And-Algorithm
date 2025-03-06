let str = 'aabacbebebe', k = 3 


// find max length of subarray with k unique chars

function maxLengthUniqueChars(str, k) {
    let i = 0, j = 0, maxLength = -Infinity

    // we need count as well, so we can't use Set. We use Map.
    let tempMap = new Map()
    while(j < str.length) {
        tempMap.set(str[j], tempMap.get(str[j]) + 1 || 1)
        if(tempMap.size < k) {
            j++
        } else if(tempMap.size === k) {
            maxLength = (maxLength > (j - i + 1)) ? maxLength : (j - i + 1)
            j++
        } else if(tempMap.size > k) {
            while(tempMap.size > k) {
                if(tempMap.get(str[i]) === 1) {
                    tempMap.delete(str[i])
                } else if (tempMap.get(str[i]) > 1) {
                    tempMap.set(str[i], tempMap.get(str[i]) - 1)
                }
                i++
            }
            j++
        }
    }
    return maxLength
}

console.log(maxLengthUniqueChars(str, k))
