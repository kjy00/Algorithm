let fs = require('fs');
let [inf, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [N, M] = inf.split(' ').map(Number);
let nums = input.map(Number).sort((a, b) => a - b);

let i = 0;
let j = 1;
let answer = 2000000005;
while (i < nums.length && j < nums.length) {
  if (nums[j] - nums[i] > M) {
    answer = Math.min(answer, nums[j] - nums[i]);
    i++;
  } else if (nums[j] - nums[i] < M) j++;
  else {
    console.log(M);
    return;
  }
}

console.log(answer);
