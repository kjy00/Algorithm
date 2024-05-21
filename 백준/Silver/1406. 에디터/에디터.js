let fs = require('fs');
let [str, n, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');
let cursor = str.length;
let ptr = 0;
let arr = new Array(100005);
arr[0] = -1;
let prev = new Array(100005);
prev[0] = -1;
let next = new Array(100005);
next[0] = 1;

for (let i = 0; i < str.length; i++) {
  arr[i + 1] = str[i];
  prev[i + 1] = i;
  next[i + 1] = i + 2;
  ptr = i + 1;
  if (i == str.length - 1) next[i + 1] = -1;
}

for (let i = 0; i < input.length; i++) {
  switch (input[i][0]) {
    case 'L':
      if (prev[cursor] != -1) cursor = prev[cursor];
      break;
    case 'D':
      if (next[cursor] != -1) cursor = next[cursor];
      break;
    case 'B':
      if (arr[cursor] != -1) {
        arr[cursor] = -1;
        prev[next[cursor]] = prev[cursor];
        next[prev[cursor]] = next[cursor];
        cursor = prev[cursor];
      }
      break;
    case 'P':
      let ins = input[i][2];
      let currentNode = cursor; // 현재 커서의 노드
      let nextNode = next[cursor]; // 현재 다음 노드
      let newNode = ++ptr; //cur과 next 사이 넣을 노드

      next[currentNode] = ptr;
      prev[nextNode] = ptr;

      arr[newNode] = ins;
      prev[newNode] = currentNode;
      next[newNode] = nextNode;

      cursor = ptr;
      break;
  }
}
let answer = [];
let idx = 0;

while (1) {
  idx = next[idx];
  if (arr[idx] != -1) answer.push(arr[idx]);
  if (idx == -1) break;
}

console.log(answer.join(''));
