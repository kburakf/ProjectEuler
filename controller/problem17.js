// SOLUTION 17

module.exports.q17 = () => {
    let proper = [
        0,
        "one".length,
        "two".length,
        "three".length,
        "four".length,
        "five".length,
        "six".length,
        "seven".length,
        "eight".length,
        "nine".length,
        "ten".length,
        "eleven".length,
        "twelve".length,
        "thirteen".length,
        "fourteen".length,
        "fifteen".length,
        "sixteen".length,
        "seventeen".length,
        "eighteen".length,
        "nineteen".length
    ]
    let tenth = [
        "twenty".length,
        "thirty".length,
        "forty".length,
        "fifty".length,
        "sixty".length,
        "seventy".length,
        "eighty".length,
        "ninety".length
    ]

    below100 = n => {
        if (n < 20)
            return proper[n]

        return tenth[n / 10 - 2 | 0] + proper[n % 10]
    }

    numberLenght = n => {
        if (n < 100)
            return below100(n)

        let res = 0
        let h = Math.floor(n / 100) % 10
        let t = Math.floor(n / 1000)
        let s = n % 100

        if (n == 1000)
            res += below100(t) + "thousand".length
        if (h != 0)
            res += proper[h] + "hundred".length;
        if (s != 0)
            res += "and".length + below100(s)
        return res
    }

    solution = n => {
        let num = 0
        for (let i = 0; i <= n; i++)
            num += numberLenght(i)
        return num
    }
    console.log(solution(1000))
}