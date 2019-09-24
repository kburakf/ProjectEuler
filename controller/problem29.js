// SOLUTION 29

module.exports.q29 = () => {
    let i = 0
    let arr = []

    for (let a = 2; a <= 100; a++) {
        for (let b = 2; b <= 100; b++) {
            power = BigInt(Math.pow(a, b))
            if (!arr.includes(power))
                arr.push(power)
        }
    }
    console.log(arr.length)
}