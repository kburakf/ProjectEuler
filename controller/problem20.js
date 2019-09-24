// SOLUTION 20

module.exports.q20 = () => {
    let sum = 0
    let factorial = 1

    for (let i = 1; i <= 100; i++)
        factorial = BigInt(factorial) * BigInt(i)

    factorial = String(BigInt(factorial)).split("")

    for (let number of factorial)
        sum += parseInt(number)

    console.log(sum)
}