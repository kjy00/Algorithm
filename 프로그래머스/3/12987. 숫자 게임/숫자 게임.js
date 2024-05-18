function solution(A, B) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    let b = 0;
    let answer = 0;
    if (A[A.length - 1] >= B[0]) return 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < B[b]) {
            b++; answer++;
        }
    }
    return answer;
}