// SOLUTION 31

module.exports.q31 = () => {
    let count = 0

    for (let p200 = 200; p200 >= 0; p200 -= 200) {
        for (let p100 = p200; p100 >= 0; p100 -= 100) {
            for (let p50 = p100; p50 >= 0; p50 -= 50) {
                for (let p20 = p50; p20 >= 0; p20 -= 20) {
                    for (let p10 = p20; p10 >= 0; p10 -= 10) {
                        for (let p5 = p10; p5 >= 0; p5 -= 5) {
                            for (let p2 = p5; p2 >= 0; p2 -= 2) {
                                count++
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(count)
}