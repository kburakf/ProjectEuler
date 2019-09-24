// SOLUTION 10

module.exports.q10 = () => {
    let sum = 0,
        i = 2
    let j = 0
    let prime = 0
    let arr = []
    while (i < 2000000) {
        for (j = Math.ceil(Math.sqrt(i)); 1 < j; j--) {
            if (i != j && i % j == 0) break
        }
        if (j == 1) {
            prime = i
            sum += prime
        }
        i++
    }
    console.log(sum)
}