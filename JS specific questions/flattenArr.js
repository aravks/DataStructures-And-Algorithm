let arr = [12, 34, [2, 3, [4, 5, 6, [56], 6], [2, 5, 7, 8], [78, 42]], [324, 567], 425, 356]


function flattenArr(arr) {
    let flattened =  arr.reduce((total, current) => {
        if(Array.isArray(current)) {
            return [...total, ...flattenArr(current)]
        }
        return [...total, current]
    }, [])
    return flattened
}

const ans = flattenArr(arr)

console.log(ans)
