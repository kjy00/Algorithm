let fs = require('fs');
let [n, ...arr] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let stack = new Array(1000000);
let answer = '';
let idx = 0;
let cur = 1;
let si = 0;
while (idx < n) {
  if (si == 0) {
    if (cur > n) {
      answer = 'NO';
      break;
    }
    stack[si++] = cur;
    answer += '+\n';
    cur++;
  }
  if (stack[si - 1] != arr[idx]) {
    if (cur > n) {
      answer = 'NO';
      break;
    }
    stack[si++] = cur;
    answer += '+\n';
    cur++;
  }
  if (stack[si - 1] == arr[idx]) {
    answer += '-\n';
    si--;
    idx++;
    continue;
  }
}

console.log(answer);
