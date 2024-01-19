let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = input[0] * 1;
let answer = [];
let house = 0;
const arr = new Array(n);
const visited = new Array(n).fill(false);
for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);
for (let i = 0; i < n; i++) arr[i] = input[i + 1];

const vec = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const dfs = (x, y) => {
  visited[y][x] = true;
  house++;
  for (let i = 0; i < 4; i++) {
    if (y + vec[i][1] < 0 || y + vec[i][1] >= n) continue;
    if (x + vec[i][0] < 0 || x + vec[i][0] >= n) continue;
    if (
      !visited[y + vec[i][1]][x + vec[i][0]] &&
      arr[y + vec[i][1]][x + vec[i][0]] === '1'
    ) {
      visited[y + vec[i][1]][x + vec[i][0]] = true;
      dfs(x + vec[i][0], y + vec[i][1]);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    house = 0;
    if (visited[i][j]) continue;
    if (arr[i][j] !== '1') continue;
    dfs(j, i);
    answer.push(house);
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
for (let i = 0; i < answer.length; i++) console.log(answer[i]);
