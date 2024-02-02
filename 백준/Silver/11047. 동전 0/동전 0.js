const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, total] = input[0].split(' ').map(Number);
let arr = new Array(n);
for (let i = 0; i < n; i++) arr[i] = Number(input[i + 1]);

let i = n - 1;
let answer = 0;
while (total > 0) {
  if (total >= arr[i]) {
    total -= arr[i];
    answer++;
  } else i--;
  if (i < 0) break;
}
console.log(answer);
