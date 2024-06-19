let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, s] = input[0].split(' ');
let arr = input[1].split(' ').map(Number);
s *= 1;
let answer = 0;
let visited = new Array(arr.length).fill(0);

const comb = (acc, idx) => {
  if (acc == s) answer++;
  for (let i = idx; i < arr.length; i++) {
    if (visited[i] == 1) continue;
    visited[i] = 1;
    comb(arr[i] + acc, i);
    visited[i] = 0;
  }
};

for (let i = 0; i < arr.length; i++) {
  visited[i] = 1;
  comb(arr[i], i);
  visited[i] = 0;
}

console.log(answer);
