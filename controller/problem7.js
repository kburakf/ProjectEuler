// SOLUTION 7

module.exports.q7 = () => {
    count = 0
    let prime, j, i = 2
    find = 10001

    while (count < find) {
        for (j = Math.ceil(Math.sqrt(i)); 1 < j; j--) {
            if (i != j && i % j == 0) break
        }
        if (j == 1) {
            count++
            prime = i
        }
        i++
    }
    console.log(prime)
}