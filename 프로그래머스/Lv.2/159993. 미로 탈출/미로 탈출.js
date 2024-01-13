function solution(maps) {
    const visited = new Array(maps.length).fill(0);
    const vec = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let i = 0; i < maps.length; i++) 
        visited[i] = new Array(maps[0].length).fill(0);
    const findStart = (start) => {
        for (let i = 0; i < maps.length; i++) {
            if (maps[i].indexOf(start) > -1) {
                visited[i][maps[i].indexOf(start)] = 1;
                return [maps[i].indexOf(start), i];
            }
        }
    }
    
    let queue = [[...findStart("S"), 0]];
    let cursor = 0;

    const checkMove = (x, y) => {
        if (x >= maps[0].length || x < 0 || y >= maps.length || y < 0) 
            return false;
        if (maps[y][x] === "X" || visited[y][x]) return false;
        return true;
    }

    const bfs = (goal) => {
        while(cursor < queue.length) {
            const [x, y, c] = queue[cursor];
            visited[y][x] = 1;
            if (maps[y][x] === goal) return c;
            for (let i = 0; i < 4; i++) {
                if (checkMove(x + vec[i][1], y + vec[i][0]) && 
                    !visited[y + vec[i][0]][x + vec[i][1]]) {
                    visited[y + vec[i][0]][x + vec[i][1]] = 1;
                    queue.push([x + vec[i][1], y + vec[i][0], c + 1]);
                }
            }
            cursor++;
        }
    }
    const l = bfs("L");
    if (!l) return -1;
    
    queue = [[...findStart("L"), 0]];
    for (let i = 0; i < maps.length; i++) visited[i].fill(0);
    cursor = 0;
    
    const e = bfs("E");
    if (!e) return -1;
    
    return l + e;
}