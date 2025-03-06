let arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3

// window size: 3
// find first negative number in each subarray, 0 if no neg.
// O/P: [ -1, -1, -7, -15, -15, 0 ]

function firstNegNumber(arr, k) {
    let i = 0, j = 0, temp = [], result = []

    while(j < arr.length) {
        if(arr[j] < 0) {
            temp.push(arr[j])
        }
        if(j - i + 1 < k) {
            j++
        } else if(j - i + 1 === k) {
            if(temp.length === 0) {
                result.push(0)
            } else {
                result.push(temp[0])
                if(arr[i] === temp[0]) {
                    temp.shift()
                }
            }
            i++
            j++
        }
    }
    return result
}


console.log(firstNegNumber(arr, k))
