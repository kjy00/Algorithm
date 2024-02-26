function solution(operations) {
    let arr = [];
    operations.forEach(e => {
        if (e[0] == "I") {
            let num = Number(e.split(' ')[1]);
            arr.push(num);
        } else if (e == "D -1") {
            let min = Math.min(...arr);
            arr = arr.filter(e => e != min);
        } else {
            let max = Math.max(...arr);
            arr = arr.filter(e => e != max);
        }
    });
   
    if (!arr.length) return [0, 0];
    return [Math.max(...arr), Math.min(...arr)];
}