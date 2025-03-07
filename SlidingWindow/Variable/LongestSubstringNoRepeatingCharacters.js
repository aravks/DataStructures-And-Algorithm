let str = 'pwwkew'


// find max length of subarray with k unique chars

function LongestSubstringNoRepeatingCharacters(str) {
    let i = 0, j = 0, maxLength = -Infinity
    // we need count as well, so we can't use Set. We use Map.
    let tempMap = new Map()
    while(j < str.length) {
        tempMap.set(str[j], tempMap.get(str[j]) + 1 || 1)
        // another way: also we can check using windowSize(j - i + 1) and tempMap.size in condition
        // No if(tempMap.get(str[j]) < 1) case
        if(tempMap.get(str[j]) === 1) {
            maxLength = (maxLength > (j - i + 1)) ? maxLength : (j - i + 1)
            j++
        } else if(tempMap.get(str[j]) > 1) {
            while(tempMap.get(str[j]) > 1) {
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

console.log(LongestSubstringNoRepeatingCharacters(str))
