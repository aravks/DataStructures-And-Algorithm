let arr = [1, 3, 6, -3, 5, 3, 6, 7], k = 3 
// let arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3 

// find max number in each subarray and return in array

function maxNumber(arr, k) {
    let i = 0, j = 0, temp = [], result = [], max = -Infinity
    while(j < arr.length) {
        // remove all small previous elements than current element
        while(temp.length !== 0 && temp[temp.length - 1] < arr[j]) {
            temp.pop()
        }
        // all current element
        temp.push(arr[j])
        
        if(j - i + 1 < k) {
            j++
        } else if(j - i + 1 === k) {
            // console.log(temp)
            result.push(temp[0])
            if(arr[i] === temp[0]) {
                temp.shift()
            }
            i++
            j++
        }
    }
    return result
}

console.log(maxNumber(arr, k))
