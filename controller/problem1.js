// SOLUTION 1
module.exports.q1 = () => {
    let i, sum;
    sum = 0;


    for (i = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum)
}