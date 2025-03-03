let arr = ['c', 'd', 'g', 'j']


function nearestLargestNotEqual(givenArr, target) {
    let length = givenArr.length
    let start = 0, end = length - 1
    
    if(target > givenArr[end]) {
        return givenArr[0]
    }
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if(givenArr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return givenArr[start]
}

console.log(nearestLargest(arr, 'g'))
