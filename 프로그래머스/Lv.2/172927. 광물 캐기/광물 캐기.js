function solution(picks, minerals) {
    
    let answer = 25 * 50;
    const dfs = (cur, p, picks) => {
        const [dia, iron, stone] = picks;
        if (cur >= minerals.length || (!dia && !iron && !stone)) {
            answer = Math.min(answer, p);
            return ;
        }
        
        let diaP = 0;
        let ironP = 0;
        let stoneP = 0;
        for (let i = 0; i < 5 && cur + i < minerals.length; i++) {
            diaP += 1;
            if (minerals[cur + i] === "diamond") {
                ironP += 5;
                stoneP += 25;
            } else if (minerals[cur + i] === "iron") {
                ironP += 1;
                stoneP += 5;
            } else {   
                ironP += 1;
                stoneP += 1;
            }
        }

        if (dia > 0) dfs(cur + 5, p + diaP, [dia - 1, iron, stone]);
        if (iron > 0) dfs(cur + 5, p + ironP, [dia, iron - 1, stone]);
        if (stone > 0) dfs(cur + 5, p + stoneP, [dia, iron, stone - 1]);
    };
    dfs(0, 0, picks);
    return answer;
}