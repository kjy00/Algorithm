function solution(k, dungeons) {
    let answer = 0;
    const getPermutation = (arr, size) => {
        let result = [];
        if (size == 1) return arr.map(e => [e]);
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const p = getPermutation(rest, size - 1);
            const attach = p.map(e => [arr[i], ...e]);
            result.push(...attach);
        }
        return result;
    };
    const permutation = getPermutation(dungeons, dungeons.length);
    permutation.forEach(p => {
        let tmp = k;
        let d = 0;
        for (let i = 0; i < p.length; i++) {
            if (tmp < p[i][0]) break;
            if (tmp < p[i][1]) break;
            tmp -= p[i][1];
            d++;
        }
        answer = Math.max(answer, d);
    })
    return answer;
}