// SOLUTION 25

module.exports.q25 = () => {
    let fib = []
    fib[0] = 0
    fib[1] = 0
    fib[2] = 1
    counter = 0
    while (String(BigInt(fib[0])).length != 1000) {
        fib[0] = BigInt(fib[1]) + BigInt(fib[2])
        fib[1] = BigInt(fib[2])
        fib[2] = BigInt(fib[0])
        counter++
    }
    console.log(counter + 1)
}