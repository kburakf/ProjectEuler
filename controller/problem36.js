// SOLUTION 36

module.exports.q36 = () => {
    let sum = 0
    for (let i = 0; i < 1000000; i++)
        if (i.toString(2).split("").reverse().join("") === i.toString(2) && i.toString().split("").reverse().join("") === i.toString())
            sum += i

    console.log(sum)
}