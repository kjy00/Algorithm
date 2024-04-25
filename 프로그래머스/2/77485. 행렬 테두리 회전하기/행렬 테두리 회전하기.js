function solution(rows, columns, queries) {
    let arr = new Array(rows);
    let answer = [];
    for (let i = 0; i < rows; i++)
        arr[i] = Array.from(Array(columns), (e, idx) => i * columns + 1 + idx);
    queries.forEach(query => {
        let [x1, y1, x2, y2] = query;
        let prev = arr[x1 - 1][y1 - 1];
        let min = prev;
        for (let i = y1; i < y2; i++) { //위
            let cur = arr[x1 - 1][i];
            arr[x1 - 1][i] = prev;
            prev = cur;
            if (min > cur) min = cur;
        }
        for (let i = x1; i < x2; i++) { //오
            let cur = arr[i][y2 - 1];
            arr[i][y2 - 1] = prev;
            prev = cur;
            if (min > cur) min = cur;
        }
        for (let i = y2 - 2; i > y1 - 2; i--) { // 아래
            let cur = arr[x2 - 1][i];
            arr[x2 - 1][i] = prev;
            prev = cur;
            if (min > cur) min = cur;
        }
        for (let i = x2 - 2; i > x1 - 2; i--) {
            let cur = arr[i][y1 - 1];
            arr[i][y1 - 1] = prev;
            prev = cur;
            if (min > cur) min = cur;
        }
        answer.push(min);
    })
    return answer;
}