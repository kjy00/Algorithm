let fs = require('fs');
let [n, ...map] = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = n.split(' ').map(Number);

let visited = Array.from(new Array(N), (e) => new Array(M).fill(0));
visited[0][0] = 1;
let queue = [[0, 0, 1]];
let vec = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

//bfs
while (queue.length) {
  [posI, posJ, cnt] = queue.shift();
  if (posI == N - 1 && posJ == M - 1) {
    console.log(cnt);
    break;
  }
  vec.forEach(([di, dj]) => {
    let ni = posI + di;
    let nj = posJ + dj;
    if (
      ni >= 0 &&
      nj >= 0 &&
      ni < N &&
      nj < M &&
      !visited[ni][nj] &&
      map[ni][nj] == '1'
    ) {
      queue.push([ni, nj, cnt + 1]);
      visited[ni][nj] = 1;
    }
  });
}
