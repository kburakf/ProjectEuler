// SOLUTION 49

module.exports.q49 = () => {
    function isPrime(num) {
        for (let i = 2; i <= num / 2; i++)
            if (num % i == 0) return false
        return true
    }
    let count = 0
    for (let i = 1000; i < 3999; i++) {
        let i3 = i + 3300,
            i6 = i + 6600
        if (isPrime(i) && isPrime(i3) && isPrime(i6) && i6<9999) {
            let boli = i.toString().split("")
            let bol3 = i3.toString().split("")
            let j = 0
            for (let k = 0; k < boli.length; k++) {
                if (boli[k] == bol3[j])
                    count++
                j++
            }
            if (count == 4) {
                let n = 0
                let bol6 = i6.toString().split("")
                for (let m = 0; m < bol6.length; m++) {
                    if (bol3[m] == bol6[n])
                        count++
                    n++
                }
            }
            if (count == 8) {
                console.log(i, i3, i6)
                count = 0
            }
        }
    }
}