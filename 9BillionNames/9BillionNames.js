function numberOfNames(n) {
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++){
        for(let j = i; j <= n; j++){
            dp[j] += dp[j - i];
        }
    }

    return dp[n];
}

console.log(numberOfNames(123));