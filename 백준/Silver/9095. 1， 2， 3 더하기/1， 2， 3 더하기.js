let fs = require('fs');
let [T, ...nums] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const dp = { 1: 1, 2: 2, 3: 4 };
for (let n = 4; n < 11; n++) {
  dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3];
}

for (let i = 0; i < T; i++) console.log(dp[nums[i]]);
