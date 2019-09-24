// SOLUTION 21

module.exports.q21 = () => {
    let total = 10000,
        a, b, sum = 0
    for (let i = 1; i < total; i++) {
        a = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0)
                a += j
        }
        b = 0
        for (let k = 1; k < a; k++) {
            if (a % k == 0)
                b += k
        }
        if (b == i && b != a)
            sum += i
    }
    console.log(sum)

}