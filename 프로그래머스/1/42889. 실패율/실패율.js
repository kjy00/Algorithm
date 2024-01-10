function solution(N, stages) {
    const challenger = new Array(N).fill(0);
    const failed = new Array(N).fill(0)
    stages.forEach(e => {
        for (let i = 0 ; i < e ; i++) {
            if (i === N) break;
            challenger[i]++;
            if (i === e - 1) failed[i]++;
        }
    })
    console.log(challenger, failed);
    const answer = challenger.map((e, i) => [i + 1, failed[i] / e]).sort((a, b) => b[1] - a[1]).map(e => e[0]);

    return answer;
}