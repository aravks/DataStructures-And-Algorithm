let str = "forxxorfxaofr", anagram = "for"

Map.prototype.isEqual = function(map2) {
    if(this.size !== map2.size) return false
    
    for(const [key, value] of this.entries()) {
        if(!map2.has(key) || map2.get(key) !== value) {
            return false
        }
    }
    return true
}

function countAnagrams(str, anagram) {
    let k = anagram.length
    let count = 0
    
    // count original anagram letters
    let anagramMap = new Map()
    for(let i of anagram) {
        anagramMap.set(i, anagramMap.get(i) + 1 || 1)
    }
    
    // count no of anagrams
    let i = 0, j = 0
    let tempMap = new Map()
    while(j < str.length) {
        tempMap.set(str[j], tempMap.get(str[j]) + 1 || 1)
        if(j - i + 1 < k) {
            j++
        } else if(j - i + 1 === k) {
            if(tempMap.isEqual(anagramMap)) {
                count++
            }
            if(tempMap.get(str[i]) === 1) {
                tempMap.delete(str[i])
            } else {
                tempMap.set(str[i], tempMap.get(str[i]) - 1)
            }
            i++
            j++
        }
    }
    return count
}

console.log(countAnagrams(str, anagram))
