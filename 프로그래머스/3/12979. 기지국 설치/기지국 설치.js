function solution(n, stations, w) {
    let start = 1;
    let end = 0;
    let answer = 0;
    let len = w * 2 + 1;
    
    for (let i = 0; i < stations.length; i++) {
        end = stations[i] - w;
        if (end <= 1) {
            start = stations[i] + w + 1;
            continue;
        }
        answer += Math.ceil((end - start) / len);
        start = stations[i] + w + 1;
    }
    start = stations[stations.length - 1] + w + 1;
    if (start < n + 1) answer += Math.ceil((n + 1 - start) / len);
    return answer;
}