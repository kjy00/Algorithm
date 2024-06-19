let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let arr = Array.from(new Array(n), (_, i) => i + 1);
let answer = [];

const combination = (size, cur, rest) => {
  if (!size) {
    answer.push(cur.join(' '));
    return;
  }
  for (let i = 0; i < rest.length; i++)
    combination(size - 1, [...cur, rest[i]], rest.slice(i + 1));
};

combination(m, [], arr);

console.log(answer.join('\n'));
