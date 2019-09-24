// SOLUTION 19

module.exports.q19 = () => {
    let moment = require("moment")
    sundays = 0
    let current = moment("1901-01-01", "YYYY-MM-DD")
    while (current.year() <= 2000) {
        if (!current.day())
            sundays++
        current.add(1, "month")
    }
    console.log(sundays)
}