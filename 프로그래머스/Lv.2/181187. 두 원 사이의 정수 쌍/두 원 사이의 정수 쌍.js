function solution(r1, r2) {
    let answer = 0; 
    for (let x = 0; x <= r2; x++) {
        let n2 = Math.sqrt(r2 * r2 - x * x);
        let n1 = Math.sqrt(r1 * r1 - x * x);
        if (isNaN(n1)) n1 = 0;
        answer += Math.floor(n2) - Math.ceil(n1) + 1;
    }
    return answer * 4 - (r2 - r1 + 1) * 4;
}