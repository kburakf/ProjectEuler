// SOLUTION 55

module.exports.q55 = () => {
    function reverse(number) {
        let numToStr = number.toString().split("").reverse().join("")
        return parseInt(numToStr)
    }

    function palindrom(number) {
        return number == reverse(number)
    }

    function lychrel(number) {
        let test = number
        for (let i = 0; i < 50; i++) {
            test += reverse(test)
            if (palindrom(test)) return false
        }
        return true
    }
    let count = 0
    for (let i = 10; i < 10000; i++) {
        if (lychrel(i)) count++
    }
    console.log(count)
}