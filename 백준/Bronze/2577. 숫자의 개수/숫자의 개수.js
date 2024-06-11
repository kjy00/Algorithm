let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = (input[0] * input[1] * input[2]).toString();
let arr = new Array(10).fill(0);
for (let i = 0; i < num.length; i++) arr[num[i] * 1]++;

console.log(arr.join('\n'));
