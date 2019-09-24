// SOLUTION 35

module.exports.q35 = () => {
    function isPrime(number) {
        for (let i = 2; i < number / 2; i++) {
            if (number % i == 0) return false
        }
        return true
    }

    function rotationPrime(number) {
        let conv = String(number)

        for (let i = 1; i < conv.length; i++) {
            conv = conv.slice(-1) + conv.slice(0, conv.length - 1)
            if (!isPrime(parseInt(conv))) return false
        }
        return true
    }
    let count = 13

    for (let i = 101; i < 1000000; i += 2)
        if (isPrime(i) && rotationPrime(i))
            count++

    console.log(count)
}