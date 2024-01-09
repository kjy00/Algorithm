function solution(numbers) {
    var answer = [];
    numbers.forEach(e => {
        let bin = e.toString(2);
        let i = bin.length - 1
        for (; i > -1 ; i--) {
            if (bin[i] === '0') {
                bin = bin.slice(0, i) + '1' + bin.slice(i + 1);
                break;
            }
        }
        if (i === -1) {
            bin = '1' + bin;
        }
        
        let j = i === -1 ? 1 : i + 1;
        for (; j < bin.length; j++) {
            if (bin[j] === '1') {
                bin = bin.slice(0, j) + '0' + bin.slice(j + 1);
                break;
            }
        }
        answer.push(parseInt(bin, 2));
    })
    return answer;
}