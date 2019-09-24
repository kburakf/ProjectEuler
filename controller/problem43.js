// SOLUTION 43

module.exports.q43 = () => {
    function isPrime(number) {
        for (let i = 2; i < number / 2; i++) {
            if (number % i == 0) return false
        }
        return true
    }

    let number = ("1234567890").split("")
}