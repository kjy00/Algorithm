let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');

let front = -1;
let back = -1;
let size = 0;
let answer = [];
let queue = new Array(2000000);
for (let i = 0; i < input.length; i++) {
  if (input[i] == 'front') {
    if (size == 0) answer.push(-1);
    else answer.push(queue[front]);
  } else if (input[i] == 'back') {
    if (size == 0) answer.push(-1);
    else answer.push(queue[back]);
  } else if (input[i] == 'pop') {
    if (size == 0) answer.push(-1);
    else {
      answer.push(queue[front++]);
      size--;
      if (size == 0) back = front;
    }
  } else if (input[i] == 'size') {
    answer.push(size);
  } else if (input[i] == 'empty') {
    if (size == 0) answer.push(1);
    else answer.push(0);
  } else {
    queue[++back] = input[i].split(' ')[1];
    if (size == 0) front = back;
    size++;
  }
}

console.log(answer.join('\n'));
