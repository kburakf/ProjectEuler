// SOLUTION 48

module.exports.q48 = () => {
    let result = 0
    let max = 10000000000

    for (let i = 1; i <= 1000; i++) {
        let temp = i
        for (let j = 1; j < i; j++) {
            temp *= i
            temp %= max
        }
        result += temp
        result %= max
    }
    console.log(result)
}