// SOLUTION 45

module.exports.q45 = () => {
    let t = 285,
        p = 165,
        h = 144

    while (true) {
        let triangle = t * (t + 1) / 2,
            pentagonal = p * (3 * p - 1) / 2,
            hexagonal = h * (h * 2 - 1)

        let min = Math.min(triangle, pentagonal, hexagonal)

        if (min == triangle && min == pentagonal && min == hexagonal)
            return console.log(min)
        if (min == triangle) t++
        if (min == pentagonal) p++
        if (min == hexagonal) h++
    }
}