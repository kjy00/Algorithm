function solution(n, s) {
    let num = Math.floor(s / n);
    if (!num) return [-1];
    let answer = new Array(n).fill(num);
    let remain = s - num * n;
    let i = 0;
    while (remain) {
        answer[answer.length - (i % answer.length) - 1]++;
        remain--;
        i++;
    }
    return answer;
}
