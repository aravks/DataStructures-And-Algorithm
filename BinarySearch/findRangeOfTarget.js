let arrr = [0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 7]

function findRange(givenArr, target) {
    
    let rangeIndex = [-1, -1]
    
    rangeIndex[0] = binSearch(givenArr, target)
    rangeIndex[1] = binSearch(givenArr, target, true)
    
    function binSearch(arr, target, lastIndex = false) {
        let length = arr.length
        let start = 0, end = length - 1
        let ans = -1
        
        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            
            if(target > arr[mid]) {
                start = mid + 1
            } else if(target < arr[mid]) {
                end = mid - 1
            } else {
                if(lastIndex) {
                    ans = mid
                    start = mid + 1
                } else {
                    ans = mid
                    end = mid - 1
                }
            }
        }
        
        return ans
    }
    
    return rangeIndex
}

console.log(findRange(arrr, 5))
