let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = new Array(10).fill(0);
for (let i = 0; i < input.length; i++) arr[input[i] * 1]++;
let n = (arr[6] + arr[9]) / 2;
arr[6] = Math.ceil(n);
arr[9] = parseInt(n);
console.log(Math.max(...arr));
