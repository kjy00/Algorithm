function solution(gems) {
    let answer = [1, gems.length];
    let pos = [0, 0];
    let s = new Set(gems);
    let obj = {};
    [...s].forEach((e) => obj[e] = 0);
    
    let tmp = new Set([gems[0]]);
    obj[gems[0]]++;
    while (tmp.size != s.size) {
        pos[1]++;
        tmp.add(gems[pos[1]]);
        obj[gems[pos[1]]]++;
    }
    answer = [pos[0] + 1, pos[1] + 1];
    
    while (pos[1] < gems.length) {
        while (1) {
            if (obj[gems[pos[0]]] < 2) break;
            obj[gems[pos[0]]]--;
            pos[0]++;
        }
        if (pos[1] - pos[0] < answer[1] - answer[0])
            answer = [pos[0] + 1, pos[1] + 1];
        pos[1]++;
        obj[gems[pos[1]]]++;
    }
    return answer;
}