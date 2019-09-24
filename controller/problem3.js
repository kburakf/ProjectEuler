// SOLUTION 3

module.exports.q3 = () => {
    let N = 600851475143;

    while (N % 2 == 0) {
        N /= 2;
    }

    for (let factor = 3; factor < N; factor += 2) {
        while (N % factor == 0 && factor < N) {
            N /= factor;
        }
    }
    console.log(N)
}