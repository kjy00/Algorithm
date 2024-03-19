function solution(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = (first + second) % 1000000007;
        // [first, second] = [second, third];
        first = second;
        second = third;
    }
    return second;
}

//1: 1, 2: 2
//3: 3, 4: 5, 5: