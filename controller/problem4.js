// SOLUTION 4

module.exports.q4 = () => {
    let max = 0,
        sum
    for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
            sum = i * j
            if (sum > max) {
                if (sum.toString().split("").reverse().join("") == sum.toString()) {
                    max = sum
                }
            }
        }
    }
    return console.log(max)
}