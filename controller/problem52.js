// SOLUTION 52

module.exports.q52 = () => {
    function getDigitSet(number) {
        const numArr = number.toString().split('').map(el => parseInt(el));
        const len = numArr.length;
        const res = [0, 0, 0, 0, 0, 0];
        while (numArr.length) {
            let temp = numArr.pop();
            res[temp]++;
        }
        return JSON.stringify(res.join(''));
    }
    for (let i = 1; i < 150000; i++) {
        if (
            getDigitSet(i) ==
            getDigitSet(i * 2) &&
            getDigitSet(i * 3) ==
            getDigitSet(i * 4) &&
            getDigitSet(i * 5) ==
            getDigitSet(i * 6)
        ) {
            console.log(i);
            break;
        }
    }
}