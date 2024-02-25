function solution(orders, course) {
    const answer = [];
    orders = orders.map(e => [...e].sort().join(""));
    const getCombi = (arr, size) => {
        let result = [];
        if (size == 1) return arr;
        for (let i = 0; i < arr.length; i++) {
            const rest = arr.slice(i + 1);
            const c = getCombi(rest, size - 1);
            const attach = c.map(e => arr[i] + e);
            result.push(...attach);
        }
        return result;
    };
    for (let i = 0; i < course.length; i++) {
        const s = {};
        orders.forEach(e => {
           getCombi([...e], course[i]).forEach(ei => {
               if (!s[ei]) s[ei] = 0;
               s[ei]++;
            });
        })
        let max = Math.max(...Object.values(s));
        if (max < 2) continue ;
        Object.keys(s).forEach(key => {
            if (s[key] == max) answer.push(key);
        })
    }
    return answer.sort();
}