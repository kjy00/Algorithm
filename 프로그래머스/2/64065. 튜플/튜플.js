function solution(s) {
    const answer = [];
    const arr = s.split("},{").map(e => e.replace(/{|}/g, "")).map(e => e.split(",")).sort((a, b) => a.length - b.length);
    arr.forEach((e, i) => {
        if (e.length === 1) answer.push(e[0] * 1);
        else {
            const setA = new Set(arr[i - 1]);
            for (let idx = 0; idx <= e.length; idx++) {
                if(setA.has(e[idx])) continue;
                answer.push(e[idx] * 1);
                break;
            }
        }
    });
    return answer;
}