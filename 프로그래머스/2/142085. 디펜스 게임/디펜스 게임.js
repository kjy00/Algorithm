//참고한 풀이
function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        const arr = enemy.slice(0, mid).sort((a, b) => b - a);
        let enemyCnt = 0;
        for (let i = k; i < arr.length; i++) enemyCnt += arr[i];
        if (enemyCnt > n) { //실패
            right = mid - 1;
            continue;
        }
        else { //성공 
            left = mid + 1;
            continue;
        }
    }
    return left - 1;
}