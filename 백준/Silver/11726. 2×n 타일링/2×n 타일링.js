let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim();

const dp = new Array(n * 1);
dp[0] = 1;
dp[1] = 2;
for (let i = 2; i < n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;

console.log(dp[n - 1]);
