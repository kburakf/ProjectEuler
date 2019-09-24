// SOLUTION 37

module.exports.q37 = () => {
    function isPrime(number) {
        for (let i = 2; i < number / 2; i++) {
            if (number % i == 0) return false
        }
        return true
    }
    let sum = 0,
        count = 0
    let i = 13
    while (count != 11) {
        let sayac = 0
        if (isPrime(i)) {
            let beString = i.toString()
            let beRevString = beString.split("").reverse().join("")
            for (let j = 0; j < beString.length; j++) {
                let after = beString.substring(0, j + 1)
                let after2 = beRevString.substring(0, j + 1)
                if (isPrime(parseInt(after)) && isPrime(parseInt(after2)))
                    sayac++
            }
            if (sayac == 4) {
                sum += i
                count++
            }
        }
        i++
    }
    console.log(sum)
}