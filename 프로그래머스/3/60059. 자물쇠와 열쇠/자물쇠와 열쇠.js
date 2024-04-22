function solution(key, lock) {
    const rotate = () => {
        let tmp = new Array(key.length);
        for (let i = 0; i < key.length; i++)
            tmp[i] = [...key[i]];
        let i = 0;
        for (let _j = tmp[0].length - 1; _j >= 0; _j--, i++) {
            let j = 0
            for (let _i = 0; _i < tmp.length; _i++, j++) {
                key[_i][_j] = tmp[i][j];
            }
        }
    }
    
    const move = (row, col) => {
        let moved = new Array(lock.length);
        for (let i = 0; i < lock.length; i++) 
            moved[i] = [...lock[i]];
        
        
        for (let i = key.length - 1; i >= 0; i--) {
            for (let j = key.length - 1; j >= 0; j--) {
                let lockI = row - (key.length - i - 1);
                let lockJ = col - (key.length - j - 1);
                if (lockI >= 0 && lockJ >= 0 && lockI < lock.length && lockJ < lock.length)
                moved[lockI][lockJ] += key[i][j];
            }
        }
        return moved;
    }
    
    const check = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] != 1) return false;
            }
        }
        return true;
    }
    
    let n = lock.length + key.length - 1;
    for (let i = 0; i < 4; i++) {
        if (i != 0) rotate();
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                let moved = move(row, col);
                if (check(moved)) return true;
            }
        }
    }
    
    return false;
}