// SOLUTION 56

module.exports.q56 = () => {
    let count = 0
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j<100; j++) {
            count++
        }
    }
    console.log(count)
}