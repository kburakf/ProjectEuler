// SOLUTION 5

module.exports.q5 = () => {
    let number = 20;
    let isFound = false;
    let checkList = [2, 3, 5, 7, 9, 11, 13, 16, 17, 19];

    while (!isFound) {
        let divided = true;
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