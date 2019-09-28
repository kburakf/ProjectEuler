// SOLUTION 53

module.exports.q53 = () => {
    function combi(number) {
        let sum = 1
        for (let i = 1; i <= number; i++)
            sum *= i
        return sum
    }
    let count = 0
    for (let n = 1; n <= 100; n++) {
        for (let r = 1; r <= n; r++) {
            let formula = combi(n) / combi(r) * combi(n - r)
            if (formula > 1000000)
                count++
        }
    }
    console.log(count)
}