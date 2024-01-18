function solution(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let [first, second] = [1, 2];
    for (let i = 3; i <= n; i++) {
        let cur = (first + second) % 1234567;
        first = second;
        second = cur;
    }
    return second;
}