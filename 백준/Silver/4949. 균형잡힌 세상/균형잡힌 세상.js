let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('.');

let bracket = {
  ')': '(',
  '}': '{',
  ']': '[',
};

for (let i = 0; i < input.length - 2; i++) {
  let stack = [];
  let str = input[i];
  let flag = true;
  for (let s = 0; s < str.length; s++) {
    if ('({['.includes(str[s])) stack.push(str[s]);
    else if (bracket[str[s]]) {
      if (!stack.length || stack.pop() != bracket[str[s]]) {
        flag = false;
        break;
      }
    }
  }
  if (stack.length || !flag) console.log('no');
  else console.log('yes');
}
