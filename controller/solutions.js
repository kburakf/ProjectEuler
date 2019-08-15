// SOLUTION 1
module.exports.q1 = () => {
    var i, sum;
    sum = 0;


    for (i = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum)
}

// SOLUTION 2

module.exports.q2 = () => {
    var num1 = 0,
        num2 = 1,
        fib = 0,
        i, sum = 0;
    for (fib = 0; fib < 4000000; fib++) {
        fib = num1 + num2;

        num1 = num2;
        num2 = fib;
        if (fib % 2 == 0) {
            sum += fib;
        }
    }
    console.log(sum)
}

// SOLUTION 3

module.exports.q3 = () => {
    var N = 600851475143;

    while (N % 2 == 0) {
        N /= 2;
    }

    for (var factor = 3; factor < N; factor += 2) {
        while (N % factor == 0 && factor < N) {
            N /= factor;
        }
    }
    console.log(N)
}

// SOLUTION 4

module.exports.q4 = () => {
    var max = 0,
        sum
    for (var i = 100; i < 1000; i++) {
        for (var j = i; j < 1000; j++) {
            sum = i * j
            if (sum > max) {
                if (sum.toString().split("").reverse().join("") == sum.toString()) {
                    max = sum
                }
            }
        }
    }
    return console.log(max)
}

// SOLUTION 5

module.exports.q5 = () => {
    var number = 20;
    var isFound = false;
    var checkList = [2, 3, 5, 7, 9, 11, 13, 16, 17, 19];

    while (!isFound) {
        var divided = true;
        for (let check of checkList) {
            if (number % check != 0) {
                divided = false;
                break;
            }
        }
        if (divided) {
            isFound = true;
            console.log(number);
            break;
        } else {
            number += 20;
        }
    }
}

// SOLUTION 6

module.exports.q6 = () => {
    var sum = 0
    for (var i = 1; i <= 100; i++) {
        sum += i
    }
    sum = Math.pow(sum, 2)
    //console.log(sum)

    var sum2 = 0
    for (var j = 1; j <= 100; j++) {
        sum2 += Math.pow(j, 2)
    }
    console.log(sum2 - sum)
}

// SOLUTION 7

module.exports.q7 = () => {
    count = 0
    var prime, j, i = 2
    find = 10001

    while (count < find) {
        for (j = Math.ceil(Math.sqrt(i)); 1 < j; j--) {
            if (i != j && i % j == 0) break
        }
        if (j == 1) {
            count++
            prime = i
        }
        i++
    }
    console.log(prime)
}

// SOLUTION 8

module.exports.q8 = () => {
    let array =
        "73167176531330624919225119674426574742355349194934" +
        "96983520312774506326239578318016984801869478851843" +
        "85861560789112949495459501737958331952853208805511" +
        "12540698747158523863050715693290963295227443043557" +
        "66896648950445244523161731856403098711121722383113" +
        "62229893423380308135336276614282806444486645238749" +
        "30358907296290491560440772390713810515859307960866" +
        "70172427121883998797908792274921901699720888093776" +
        "65727333001053367881220235421809751254540594752243" +
        "52584907711670556013604839586446706324415722155397" +
        "53697817977846174064955149290862569321978468622482" +
        "83972241375657056057490261407972968652414535100474" +
        "82166370484403199890008895243450658541227588666881" +
        "16427171479924442928230863465674813919123162824586" +
        "17866458359124566529476545682848912883142607690042" +
        "24219022671055626321111109370544217506941658960408" +
        "07198403850962455444362981230987879927244284909188" +
        "84580156166097919133875499200524063689912560717606" +
        "05886116467109405077541002256983155200055935729725" +
        "71636269561882670428252483600823257530420752963450"

    array = array.toString().split("")

    let sum, res = 1
    max = 0
    for (let i = 0; i <= array.length - 13; i++) {
        for (let j = i; j < 13 + i; j++) {
            sum = parseInt(array[j], 10)
            res = res * sum
        }
        if (max < res) {
            max = res
        }
        res = 1
    }
    console.log(max)
}

// SOLUTION 9

module.exports.q9 = () => {
    var a, b, c, sum, multiple
    var a2 = Math.pow(a, 2)
    var b2 = Math.pow(b, 2)
    var c2 = Math.pow(c, 2)

    for (a = 0; a < 1000; a++) {
        for (b = a; b < 1000 - a; b++) {
            for (c = b; c < 1000 - a - b; c++) {
                sum = a + b + c
                if (sum == 1000) {
                    if (a < b && b < c) {
                        if (a2 + b2 == c2) {
                            console.log("a: " + a + " b: " + b + " c: " + c)
                        }
                    }
                }
            }
        }
    }
}

module.exports.q10 = () => {
    let sum = 0,
        i = 2
    let prime = 0
    let arr = []
    while (i < 2000000) {
        for (var j = Math.ceil(Math.sqrt(i)); 1 < j; j--) {
            if (i != j && i % j == 0) break
        }
        if (j == 1) {
            prime = i
            sum += prime
        }
        i++
    }
    console.log(sum)
}

module.exports.q11 = () => {
    
}