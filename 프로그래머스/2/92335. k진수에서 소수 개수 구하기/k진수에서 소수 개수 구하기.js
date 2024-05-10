function solution(n, k) {
    return n.toString(k).split('0').filter(x => x).reduce((acc, cur) => {
        if (cur < 2) return acc;
        for (let i = 2; i * i <= cur; i++)
            if (cur % i == 0) return acc;
        return acc + 1;
    }, 0);
}