// SOLUTION 26 

module.exports.q26 = () => {
    let maxRepeat = 0,
        maxValue = 0,
        counter, value

    for (let i = 2; i <= 1000; i++) {
        counter = 0
        value = 10 % i
        j = 1000
        while (value != 1 && j > 0) {
            value *= 10
            value %= i
            counter++
            j--
        }
        if (counter > maxRepeat && j > 0) {
            maxRepeat = counter
            maxValue = i
        }
    }
    console.log(maxValue)
}