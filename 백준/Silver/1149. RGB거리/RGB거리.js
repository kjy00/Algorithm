let fs = require('fs');
let [h, ...houses] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

houses = houses.map((e) => e.split(' ').map(Number));
const dp = Array.from(new Array(h * 1), (e) => new Array(3));
dp[0][0] = houses[0][0];
dp[0][1] = houses[0][1];
dp[0][2] = houses[0][2];
for (let i = 1; i < h; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + houses[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + houses[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + houses[i][2];
}

console.log(Math.min(...dp[h - 1]));
