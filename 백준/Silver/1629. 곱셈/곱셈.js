let fs = require('fs');
let [A, B, C] = fs.readFileSync('/dev/stdin').toString().split(' ');
A = BigInt(A);
B = BigInt(B);
C = BigInt(C);
const recur = (b) => {
  if (b == 1) return A % C;
  let val = recur(b / BigInt(2));
  val = (BigInt(val) * BigInt(val)) % C;
  if (b % BigInt(2) == 0) return BigInt(val);
  return (val * A) % C;
};

console.log(parseInt(recur(B)));
