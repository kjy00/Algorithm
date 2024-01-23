const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ');
let arr = [];
let answer = 1;
for (let i = 0; i < n; i++) arr.push(input[i + 1]);

const checkSquare = (i, j, k) => {
  let l = k - j;
  let num = arr[i][j];
  if (i + l > n - 1) return false;
  if (arr[i + l][j] == num && arr[i + l][k] == num) return true;
  return false;
};

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    for (let k = j + 1; k < m; k++) {
      if (arr[i][j] == arr[i][k] && k - j + 1 > answer) {
        if (checkSquare(i, j, k)) {
          answer = k - j + 1;
        }
      }
    }
  }
}

console.log(answer ** 2);
