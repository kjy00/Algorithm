let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let line = 1;
let map = [];
let vegetables = [];
let visited = {};
let answer = 0;
const vec = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const dfs = (x, y) => {
  if (x >= map[0].length || x < 0 || y >= map.length || y < 0) return;
  if (map[y][x] != 1) return;
  if (visited.has(`${x},${y}`)) return;
  visited.add(`${x},${y}`);

  for (let i = 0; i < 4; i++) {
    if (x >= map[0].length || x < 0 || y >= map.length || y < 0) continue;
    dfs(x + vec[i][0], y + vec[i][1]);
  }
};

for (let t = 0; t < T; t++) {
  //initialize
  let [n, m, k] = input[line].split(' ').map(Number);
  map = new Array(m);
  for (let i = 0; i < m; i++) map[i] = new Array(n).fill(0);
  vegetables = [];
  visited = new Set();
  answer = 0;

  for (let i = 0; i < k; i++) {
    let [x, y] = input[i + line + 1].split(' ').map(Number);
    map[y][x] = 1;
    vegetables.push([x, y]);
  }

  for (let i = 0; i < vegetables.length; i++) {
    let [x, y] = vegetables[i];
    if (visited.has(`${x},${y}`)) continue;
    dfs(x, y);
    answer++;
  }
  console.log(answer);
  line += k + 1;
}
