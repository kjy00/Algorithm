function solution(n, left, right) {
    const answer = new Array(right - left + 1);
    for (let i = 0; i < answer.length; i++) {
        const row = parseInt((left + i) / n);
        const col = (left + i) % n;
        if (col < row + 1) answer[i] = row + 1;
        else answer[i] = col + 1;
    }
    return answer;
}