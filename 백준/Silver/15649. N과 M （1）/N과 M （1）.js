let fs = require('fs');
let [n, r] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const combination = (arr, cnt) => {
  const result = [];
  if (cnt == 1) return arr.map((e) => [e]);
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const c = combination(rest, cnt - 1);
    const combi = c.map((e) => [arr[i], ...e]);
    result.push(...combi);
  }
  return result;
};
let arr = new Array(n);
for (let i = 0; i < arr.length; i++) arr[i] = i + 1;
const combi = combination(arr, r);
for (let i = 0; i < combi.length; i++) console.log(combi[i].join(' '));
