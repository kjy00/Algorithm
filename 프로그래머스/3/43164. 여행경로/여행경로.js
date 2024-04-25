function solution(tickets) {
    let answer = [];
    const dfs = (t, arr) => {
        if (!t.length) {
            answer.push(arr);
            return;
        }
        for (let i = 0; i < t.length; i++) {
            if (tickets[t[i]][0] == arr[arr.length - 1]) {
                let tmp = [...arr, tickets[t[i]][1]];
                let _t = [...t.slice(0, i), ...t.slice(i + 1)];
                dfs(_t, tmp);
            }
        }
    }
    
    let t = new Array(tickets.length);
    
    for (let i = 0; i < t.length; i++) t[i] = i;
    
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] != "ICN") continue;
        let tmp = [...t.slice(0, i), ...t.slice(i + 1)];
        dfs(tmp, [...tickets[i]]);
    }
    
    answer.sort((a, b) => {
        if (a.join() >= b.join()) return 1;
        return -1;
    })
    return answer[0];
}