let fs = require('fs');
let [n, ...map] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, N] = n.split(' ').map(Number);
let T = 0;

for (let i = 0; i < map.length; i++) {
  map[i] = map[i].split(' ').map((e) => {
    if (e == 0 || e == 1) T++;
    return Number(e);
  });
}

let visited = Array.from(new Array(N), (e) => new Array(M).fill(0));
let answer = 0;
let queue = [];
let vec = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] == 1) {
      queue.push([i, j, 0]);
      visited[i][j] = 1;
      T--;
    }
  }
}

if (queue.length == T) {
  console.log(0);
  return;
}

//bfs
let idx = 0;
while (idx < queue.length) {
  let [i, j, day] = queue[idx];
  idx++;
  answer = day;
  for (let v = 0; v < 4; v++) {
    let ni = i + vec[v][0];
    let nj = j + vec[v][1];
    if (
      0 <= ni &&
      ni < N &&
      0 <= nj &&
      nj < M &&
      !visited[ni][nj] &&
      map[ni][nj] == 0
    ) {
      visited[ni][nj] = 1;
      T--;
      queue.push([ni, nj, day + 1]);
    }
  }
}
if (T > 0) console.log(-1);
else console.log(answer);
