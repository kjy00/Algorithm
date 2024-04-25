function solution(n) {
    let arr = new Array(n).fill(0);
    let answer = 0;
    const check = (x) => {
        for (let i = 0; i < x; i++) {
            if (arr[i] == arr[x] || Math.abs(arr[x] - arr[i]) == x - i)
                return false;
        }
        return true;   
    }
    const dfs = (x) => {
        if (x == n) answer++;
        else {
            for (let i = 0; i < n; i++) {
                arr[x] = i;
                if (!check(x)) continue;
                dfs(x + 1);
            }
        }
    }
    dfs(0);
    return answer;
}