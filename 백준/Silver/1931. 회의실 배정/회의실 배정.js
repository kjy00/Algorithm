let fs = require('fs');
let [n, ...table] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n *= 1;
table = table.map((e) => e.split(' ').map(Number));

table.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
let answer = 0;
let t = 0;
for (let i = 0; i < table.length; i++) {
  if (t <= table[i][0]) {
    answer++;
    t = table[i][1];
  }
}

console.log(answer);
