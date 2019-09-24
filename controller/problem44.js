// SOLUTION 44

module.exports.q44 = () => {
    function pentagonal(p) {
        let result = (Math.sqrt(1 + 24 * p) + 1.0) / 6.0
        let a = String(result)
        if (parseInt(a) == result) return true
        else return false
    }

    function pentagonal2(n) {
        let result = n * (3 * n - 1) / 2
        return result
    }
    let i = 1
    result = 0,
        check = true

    while (check) {
        i++
        let p1 = pentagonal2(i)
        for (let j = i - 1; 0 < j; j--) {
            let p2 = pentagonal2(j)
            if (pentagonal(p1 - p2) && pentagonal(p1 + p2)) {
                result = p1 - p2
                return console.log(result)
                check = false
                break
            }
        }
    }
}