function solution(n, works) {
    works.sort((a, b) => b - a);
    while (n) {
        let i = 0;
        if (works[i] == 0) return 0;
        while (i < works.length) {
            if (i == works.length - 1) break;
            if (works[i] > works[i + 1]) break;
            i++;
        }
        works[i] -= 1; n--;
    }
    return works.reduce((acc, cur) => acc + cur * cur, 0);
}