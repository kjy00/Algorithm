function solution(n) {
    let arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++)
        arr[i] = new Array(i + 1).fill(0);
    arr[0][0] = 1;
    let answer = [];
    let x = 2;
    let num = n * (n + 1) / 2;
    let i = 0; let j = 0; let d = 0;
    let dir = [[1, 0], [0, 1], [-1, -1]];
    const check = (i, j) => {
        if (i < 0 || j < 0 || i < j || i >= n) return false;
        return true;
    }
    
    while (x <= num) {
        let ni = dir[d][0] + i;
        let nj = dir[d][1] + j;
        if (!check(ni, nj) || arr[ni][nj]) {
            d++; d %= 3;
            ni = dir[d][0] + i; nj = dir[d][1] + j;
        }
        arr[ni][nj] = x;
        x++; i = ni; j = nj;
    }
    arr.forEach(e => answer = [...answer, ...e]);
    return answer;
}