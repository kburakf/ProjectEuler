// SOLUTION 34

module.exports.q34 = () => {
    function factorial(number) {
        let facto = 1
        for (let i = 1; i <= number; i++)
            facto *= i

        return facto
    }

    let facto = 0
    for (let i = 3; i < 370000; i++) {
        let sum = 0
        let bol = String(i).split("")
        for (let j = 0; j < bol.length; j++)
            sum += factorial(parseInt(bol[j]))

        if (sum === i) {
            facto += sum
            sum = 0
        }
    }
    console.log(facto)
}