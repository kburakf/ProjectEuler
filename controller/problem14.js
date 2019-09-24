// SOLUTION 14

module.exports.q14 = () => {
    const number = 1000000;

    let maxChain = 0,
        sequence

    for (let i = 2; i < number; i++) {
        sequence = i;
        counter = 1
        while (sequence != 1) {
            if ((sequence % 2) == 0)
                sequence = sequence / 2
            else
                sequence = sequence * 3 + 1

            counter++
        }
        if (counter > maxChain) {
            maxChain = counter
            maxNumber = i
        }
    }
    console.log("Max chain: " + maxChain)
    console.log("Max chains number: " + maxNumber)
}