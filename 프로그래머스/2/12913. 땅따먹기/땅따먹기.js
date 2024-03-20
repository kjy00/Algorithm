function solution(land) {
    let answer = [...land[0]];
    for (let i = 1; i < land.length; i++) {
        let tmp = [...land[i]];
        for (let j = 0; j < 4; j++) {
            let max = Math.max(...answer.slice(0, j), ...answer.slice(j + 1));
            tmp[j] = max + tmp[j];
        }
        answer = tmp;
    }
    return Math.max(...answer);
}
