// SOLUTION 2

module.exports.q2 = () => {
    let num1 = 0,
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