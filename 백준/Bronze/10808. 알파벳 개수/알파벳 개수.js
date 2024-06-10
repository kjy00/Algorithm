let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let answer = new Array(26).fill(0);
let aCode = 'a'.charCodeAt();

for (let i = 0; i < input.length; i++) answer[input[i].charCodeAt() - aCode]++;

console.log(answer.join(' '));
