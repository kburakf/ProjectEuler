// SOLUTION 30

module.exports.q30 = () => {
    let power = []
    for (let i = 0; i < 10; i++)
        power[i] = i ** 5

    function powSum(n) {
        let sum = 0
        while (n > 0) {
            sum += power[n % 10]
            n = n / 10 | 0
        }
        return sum
    }

    function solution() {
        let sum = 0
        for (let i = 10; i < 354294; i++) {
            if (i == powSum(i))
                sum += i
        }
        return console.log(sum)
    }
    solution()
}