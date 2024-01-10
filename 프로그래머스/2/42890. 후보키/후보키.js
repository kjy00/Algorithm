function solution(relation) {
    let nums = Array.from({length: relation[0].length}, (e, i) => i);
    let key = [];
    
    const getCombination = (arr, size) => {
        const result = [];
        if (size === 1) return arr.map((e) => [e]);
        arr.forEach((e, i) => {
            const rest = arr.slice(i + 1);
            const c = getCombination(rest, size - 1);
            const attach = c.map(el => [e, ...el]);
            result.push(...attach);
        })
        return result;
    };
    
    const checkMinimality = (candi) => {
        for (let i = 0; i < key.length; i++) {
            let check = 0;
            for (let j = 0; j < key[i].length; j++) {
                if (candi.includes(key[i][j])) check++;
            }
            if (check === key[i].length) return true;
        }
        return false;
    };
    
    const checkKey = (candi) => {
        const arr = new Array(relation.length).fill("");
        candi.forEach((e) => {
            for (let i = 0; i < relation.length; i++)
                arr[i] += relation[i][e]
        })
        const s = new Set(arr);
        return s.size === arr.length;
    }
    
    //한개
    for(let i = 0; i < relation[0].length; i++) {
        const s = new Set();
        for (let j = 0; j < relation.length; j++)
            s.add(relation[j][i]);
        if (s.size === relation.length)
            key.push(i);
    }
    nums = nums.filter((e) => !key.includes(e));
    key = key.map((e) => [e]);

    const combi = [];
    for (let i = 1; i < nums.length; i++)
        combi.push(...getCombination(nums, i + 1));
    for (let i = 0 ; i < combi.length; i++) {
        if (checkMinimality(combi[i])) continue;
        if (checkKey(combi[i])) key.push(combi[i]);
    }
    return key.length;
}
