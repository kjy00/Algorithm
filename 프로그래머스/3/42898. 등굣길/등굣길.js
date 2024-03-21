function solution(m, n, puddles) {
    const map = new Array(n).fill(0);
    for (let i = 0; i < n; i++) map[i] = new Array(m).fill(0);
    map[0][0] = 1;
    puddles.forEach(e => map[e[1] - 1][e[0] - 1] = -1);
    
    const getCoordValue = (i, j) => {
        if (i < 0 || j < 0 || map[i][j] == -1) return 0;
        return map[i][j];
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0 && j == 0) continue;
            if (map[i][j] != -1)
                map[i][j] = (getCoordValue(i-1, j) + getCoordValue(i, j -1)) % 1000000007;
        }
    }
    return map[n - 1][m - 1];
}