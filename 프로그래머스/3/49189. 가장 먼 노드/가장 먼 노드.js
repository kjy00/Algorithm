function solution(n, edge) {
    let obj = {};
    let q = [[1, 0]];
    let dist = new Array(n).fill(0); dist[0] = 0;
    let visited = new Set();
    visited.add(1);
    for (let i = 0; i < edge.length; i++) {
        let [n1, n2] = edge[i];
        if (!obj[n1]) obj[n1] = [];
        if (!obj[n2]) obj[n2] = [];
        obj[n1].push(n2);
        obj[n2].push(n1);
    }
    while (q.length) {
        let [node, d] = q.shift();
        obj[node].forEach((e => {
            if (visited.has(e)) return;
            q.push([e, d + 1])
            dist[e - 1] = d + 1;
            visited.add(e);
        }));
    }
    let max = Math.max(...dist);
    return dist.reduce((acc, cur) => {
        if (cur == max) return acc + 1;
        return acc;
    }, 0);
}