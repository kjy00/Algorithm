function solution(N, road, K) {
    const obj = {};
    const dist = {1: 0};

    road.forEach((e) => {
        if (!obj[e[0]]) obj[e[0]] = [];
        if (!obj[e[1]]) obj[e[1]] = [];
        obj[e[0]].push([e[1], e[2]]);
        obj[e[1]].push([e[0], e[2]]);
    });
    const queue = [[1, 0]];
    
    while (queue.length) {
        let [city, cost] = queue.shift();
        obj[city].forEach(e => {
            if (dist[e[0]] === undefined || cost + e[1] < dist[e[0]]) {
                dist[e[0]] = cost + e[1];
                queue.push([e[0], dist[e[0]]]);
            }
        })
    }
    let answer = 0;
    for (let i = 1; i <= N; i++) if (dist[i] <= K) answer++;
    return answer;
}
