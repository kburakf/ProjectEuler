// SOLUTION 39

module.exports.q39 = () => {
    function p39(p) {
        let count = 0,
            c2, c
        for (let a = 1; a <= p; a++) {
            for (let b = a; b <= p; b++) {
                c2 = a ** 2 + b ** 2
                c = Math.sqrt(c2)
                if (a + b + c <= p)
                    count++
            }
        }
        console.log(count)
    }
    p39(1000)
}