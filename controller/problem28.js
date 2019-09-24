// SOLUTION 28

module.exports.q28 = () => {
    let sum = 1,
        initial = 1

    for (let i = 2; i <= 1001; i += 2) {
        for (let j = 1; j < 5; j++) {
            initial += i
            sum += initial
        }
    }
    console.log(sum)
}