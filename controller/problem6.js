// SOLUTION 6

module.exports.q6 = () => {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    sum = Math.pow(sum, 2)

    let sum2 = 0
    for (let j = 1; j <= 100; j++) {
        sum2 += Math.pow(j, 2)
    }
    console.log(sum2 - sum)
}