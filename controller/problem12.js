// SOLUTION 12

module.exports.q12 = () => {
    function factors(n) {
        let arr = [],
            i = 1,
            max = n

        while (i < max) {
            if (n % i === 0) {
                arr.push(i)
                let k = n / i
                if (i != k)
                    arr.push(k)
                max = k
            }
            i++
        }
        return arr
    }

    let x = 0,
        y = 1

    while (factors(x).length <= 500) {
        x += y
        y++
    }

    console.log(x)

}