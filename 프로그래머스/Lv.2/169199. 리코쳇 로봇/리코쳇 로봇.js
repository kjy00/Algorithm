function solution(board) {
    const vec = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //위, 아래, 좌, 우
    const visited = new Array(board.length).fill(0);
    for (let i = 0; i < board.length; i++) 
        visited[i] = new Array(board[0].length).fill(0);
    let curX = 0; let curY = 0;
    for (; curY < board.length; curY++) {
        for (curX = 0; curX < board[0].length; curX++)
            if (board[curY][curX] === "R") break;
        if (board[curY][curX] === "R") break;
    }
    visited[curY][curX] = 1;
    
    const move = (dir, x, y) => {
        while (x >= 0 && y >= 0 && x < board[0].length && y < board.length && board[y][x] !== "D") {
            x += dir[1];
            y += dir[0];
        }
        return [y - dir[0], x - dir[1]];
    }
    
    
    let cursor = 0;
    const queue = [[curX, curY, 0]];
    while (cursor < queue.length) {
        const [x, y, c] = queue[cursor];
        if (board[y][x] === "G") return c;
        visited[y][x] = 1;
        for (let i = 0; i < 4; i++) {
            const [moveY, moveX] = move(vec[i], x, y);
            if (!visited[moveY][moveX]) {
                queue.push([moveX, moveY, c + 1]);
                visited[moveY][moveX] = 1;
            }
        }
        cursor++;
    }
    return -1;
}