const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = input[0] * 1;
let numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let good = 0;
for (let i = 0; i < n; i++) {
  let j = 0;
  let k = n - 1;
  while (j < k) {
    if (j == i) j++;
    if (k == i) k--;
    if (numbers[j] + numbers[k] == numbers[i] && j != k) {
      good++;
      break;
    }
    if (numbers[j] + numbers[k] > numbers[i]) k--;
    if (numbers[j] + numbers[k] < numbers[i]) j++;
  }
}
console.log(good);
