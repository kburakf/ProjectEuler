// SOLUTION 16

module.exports.q16 = () => {
    let number = String(BigInt(2 ** 1000))
    number = number.split("")
    let sum = 0
    for (let item of number)
        sum += parseInt(item)
    console.log(sum)
}