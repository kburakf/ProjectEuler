// SOLUTION 15

module.exports.q15 = () => {

    let solution = size => {

        let dp = new Array(size + 1)
        for (let i = 0; i <= size; i++)
            dp[i] = new Array(size + 1).fill(0)

        dp[0][0] = 1

        for (let i = 0; i <= size; i++) {
            for (let j = 0; j <= size; j++) {
                if (i) dp[i][j] += dp[i - 1][j]
                if (j) dp[i][j] += dp[i][j - 1]
            }
        }
        return dp[size][size]
    }

    console.log(solution(20))
}