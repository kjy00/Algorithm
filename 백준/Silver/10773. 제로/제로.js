let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];

for (let i = 1; i < input.length; i++) {
  input[i] = Number(input[i]);
  if (input[i] == 0) stack.pop();
  else stack.push(input[i]);
}

let sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
