let fs = require('fs');
let [n, ...ropes] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .toString()
  .trim()
  .split('\n')
  .map(Number);

ropes.sort((a, b) => b - a);

let answer = ropes[0];
for (let i = 0; i < ropes.length; i++) {
  let w = ropes[i] * (i + 1);
  if (w >= answer) answer = w;
}

console.log(answer);
