// SOLUTION 9

module.exports.q9 = () => {
    let a, b, c, sum, c2

    for (a = 0; a < 1000; a++) {
        for (b = a; b < 1000; b++) {
            c2 = a ** 2 + b ** 2
            c = Math.sqrt(c2)
            if (a + b + c == 1000)
                sum = a * b * c
        }
    }
    console.log(sum)
}