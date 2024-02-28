function solution(weights) {
    let answer = 0;
    let obj = {};
   for (let i = 0; i < weights.length; i++) {
       if (!obj[weights[i]]) obj[weights[i]] = 0;
       obj[weights[i]]++;
   }
    for (let i = 0; i < weights.length; i++) {
        if (obj[weights[i]]) answer += obj[weights[i]] - 1;
        if (obj[weights[i] * 2]) answer += obj[weights[i] * 2];
        if (obj[weights[i] * 3/2]) answer += obj[weights[i] * 3/2];
        if (obj[weights[i] * 4/3]) answer += obj[weights[i] * 4/3];
        if (obj[weights[i] * 1/2]) answer += obj[weights[i] * 1/2];
        if (obj[weights[i] * 2/3]) answer += obj[weights[i] * 2/3];
        if (obj[weights[i] * 3/4]) answer += obj[weights[i] * 3/4];
    }
    return answer/2;
}