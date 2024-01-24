const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let [a, b, c, d, e, f] = arr;
let min = Math.min(...arr);
if (N === 1) {
  console.log(a + b + c + d + e + f - Math.max(...arr));
  return;
}
let min2 = Math.min(
  a + b,
  a + c,
  a + d,
  a + e,
  b + d,
  d + e,
  e + c,
  c + b,
  f + b,
  f + c,
  f + d,
  f + e
);
let min3 = Math.min(
  a + b + c,
  a + b + d,
  a + d + e,
  a + e + c,
  f + b + c,
  f + b + d,
  f + d + e,
  f + e + c
);
console.log(
  ((N - 2) ** 2 * 5 + (N - 2) * 4) * min + ((N - 2) * 8 + 4) * min2 + min3 * 4
);
