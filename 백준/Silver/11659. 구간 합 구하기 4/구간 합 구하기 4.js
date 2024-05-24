let fs = require('fs');
let [n, arr, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

arr = arr.split(' ').map(Number);
answer = [];
for (let i = 1; i < arr.length; i++) arr[i] += arr[i - 1];

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  answer.push(arr[b - 1] - (a < 2 ? 0 : arr[a - 2]));
}
console.log(answer.join('\n'));
