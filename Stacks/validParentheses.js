let str = "((){()}[)])"
let track = [], count = 0

function validParentheses(str) {
    for (let i of str) {
        if(['(', '{', '['].includes(i)) {
            track.push(i)
            count++
        } else {
            let last = track.pop()

            if(last === '{' && i === '}') count--
            else if(last === '(' && i === ')') count--
            else if(last === '[' && i === ']') count--
            else return false
        }
    }
    return count === 0
}

console.log(validParentheses(str))
