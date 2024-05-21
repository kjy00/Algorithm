let fs = require('fs');
let dwarfs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

dwarfs.sort((a, b) => a - b);
let sum = dwarfs.reduce((acc, cur) => acc + cur, 0);
let left = 0;
let right = dwarfs.length - 1;

while (1) {
  let two = dwarfs[left] + dwarfs[right];
  if (sum - two > 100) left++;
  else if (sum - two < 100) right--;
  else break;
}

dwarfs.forEach((e, i) => {
  if (i != left && i != right) console.log(e);
});
