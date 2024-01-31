function solution(want, number, discount) {
    let days = number.reduce((acc, cur) => acc + cur, 0);
    let obj = {};
    let answer = 0;
    want.forEach((e, i) => obj[e] = number[i]);
    for (let i = 0; i < discount.length - days + 1; i++) {
        let finished = 0;
        let flag = true;
        const obj2 = {...obj};
        
        for (let j = i; j < days + i; j++)
            if (obj2[discount[j]]) obj2[discount[j]]--;
        
        want.forEach(e => {
            if (obj2[e] != 0) flag = false;
        })
        
        if (flag) answer++;
    }
    return answer;
}