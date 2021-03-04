module.exports = function check(str, bracketsConfig) {
    let res = true
    let checkArr = str.split('')
    let arr = []

    if (str.length % 2 !== 0) {
        return false
    }

    let bracketObj = {}

    bracketsConfig.forEach(item => {
        if (item[0] === item[1]) {
            bracketObj['b' + item[0]] = 'a' + item[0]
            let count = 0
            checkArr = checkArr.map((el, index) => {
                if (el === item[0] && count % 2 === 0) {
                    count++
                    return 'a' + item[0]
                } else if (el === item[0] && count % 2 !== 0) {
                    count++
                    return 'b' + item[0]
                } else {
                    return el
                }
            })
        } else {
            bracketObj[item[1]] = item[0]
        }

    })

    let closeBraketsArr = Object.keys(bracketObj)

    function isClose(bracket) {
        if (closeBraketsArr.includes(bracket)) {
            return true
        } else {
            return false
        }
    }

    for (let i = 0; i < checkArr.length; i++) {
        if (isClose(checkArr[i])) {
            let t = arr.pop()
            if (bracketObj[checkArr[i]] != t) {
                res = false; break;
            }
        } else {
            arr.push(checkArr[i])
        }
    }
    return res
}




