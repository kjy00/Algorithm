function solution(progresses, speeds) {
    let cur = 0;
    let answer = [];
    while (cur < progresses.length) {
        if (progresses[cur] >= 100) {
            let cnt = 0;
            while (progresses[cur] >= 100) {
                cnt++;
                cur++;
            }
            answer.push(cnt);
            continue;
        }
        for (let i = cur; i < progresses.length; i++) 
            progresses[i] += speeds[i];
    }
    return answer;
}