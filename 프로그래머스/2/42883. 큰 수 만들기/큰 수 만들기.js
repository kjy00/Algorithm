function solution(number, k) {
    let arr = [];
    for (let i = 0; i < number.length; i++) {
        let num = number[i] * 1;
        while (arr.length && k > 0) {
            if (arr[arr.length - 1] >= num) break;
            arr.pop();
            k--;
        }
        arr.push(num);
    }
    if (k > 0) arr = arr.slice(0, arr.length - k);
    return arr.join('');
}