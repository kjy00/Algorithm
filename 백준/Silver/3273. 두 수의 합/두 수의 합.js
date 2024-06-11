let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = new Array(100001).fill(0);
let nums = input[1].split(' ').map((e) => {
  e = Number(e);
  count[e] = 1;
  return e;
});
let x = Number(input[2]);
let answer = 0;
for (let i = 0; i < nums.length; i++) {
  let cur = nums[i];
  let target = x - cur;
  if (cur == target) continue;
  if (target < 1 || target > 100000) continue;
  if (count[target] && count[cur]) {
    answer++;
    count[target] = 0;
    count[cur] = 0;
  }
}

console.log(answer);
