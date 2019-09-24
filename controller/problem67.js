// SOLUTION 67 

/* module.exports.q67 = () => {

    function cleanData(data) {
        let lines = data.split("\n")
        let line

        let triangle = []
        for (let i = 0; i < lines.length; i++) {
            line = lines[i].split(" ")
            for (let j = 0; j < line.length; j++)
                line[j] = parseInt(line[j], 10)
            triangle.push(line)
        }
        return triangle
    }

    const fs = require("fs")

    function app() {
            let data = process.env.q67

            let triangle = cleanData(data)
            let depth = triangle.length - 2

            while (depth >= 0) {
                for (let i = 0; i <= depth; i++)
                    triangle[depth][i] += Math.max(triangle[depth + 1][i], triangle[depth + 1])
                depth -= 1
            }
            console.log(triangle[0][0])

    }
    app()
} */