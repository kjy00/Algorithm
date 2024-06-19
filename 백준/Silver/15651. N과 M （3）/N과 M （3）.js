let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let arr = Array.from(new Array(n), (_, i) => i + 1);
let answer = [];

const getRepCombi = (cur, r) => {
  if (r == 0) {
    answer.push(cur.join(' '));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    getRepCombi([...cur, arr[i]], r - 1);
  }
};

getRepCombi([], m);

console.log(answer.join('\n'));
