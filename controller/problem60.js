// SOLUTION 60

module.exports.q60 = (req, res) => {
    res.render("index")

    function isPrime(num) {
        for (let i = 2; i <= num / 2; i++)
            if (num % i == 0) return false
        return true
    }

    let count = 0,
        i = 1,
        sum = 0
    let arr = []
    while (count != 5) {
        i++
        if (isPrime(i)) arr.push(i)
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                let rev = (String(arr[j]) + String(arr[k])).split("").reverse().join("")
                if (isPrime(parseInt(String(arr[j]) + String(arr[k]))) &&
                    isPrime(rev)) {
                    count++
                    sum += arr[j]
                }
            }
        }
    }
    console.log(sum)
}