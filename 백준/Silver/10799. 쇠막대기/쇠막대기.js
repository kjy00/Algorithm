let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

let stack = [];
let answer = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == '(') {
    if (i + 1 < str.length && str[i + 1] == ')') {
      //laser
      for (let j = 0; j < stack.length; j++) stack[j]++;
      i++;
    } else {
      stack.push(1);
    }
  } else answer += stack.pop();
}
console.log(answer);
