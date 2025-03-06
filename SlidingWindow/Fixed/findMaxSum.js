let arr = [2, 5, 1, 8, 2, 9, 1], k = 3

// window size: 3
// find max sum out of all subarrays

function findMaxSum(arr, k) {
    let i = 0, j = 0, maxSum = -Infinity, sum = 0

    while(j < arr.length) {
        sum += arr[j]
        if(j - i + 1 < k) {
            j++
        } else if(j - i + 1 === k) {
            maxSum = maxSum > sum ? maxSum : sum
            sum -= arr[i]
            i++
            j++
        }
    }
    return maxSum
}


console.log(findMaxSum(arr, k))
