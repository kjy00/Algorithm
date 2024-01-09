function solution(numbers) {
    var answer = 0;
    const numSet = new Set();
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2 ; i <= num / i; i++)
            if (num % i === 0) return false;
        return true;
    }
    const getPermutation = (nums, size) => {
        const result = [];
        if (size === 1) return [...nums];
        [...nums].forEach((e, i) => {
            const rest = nums.slice(0, i) + nums.slice(i + 1);
            const p = getPermutation(rest, size - 1);
            const attach = p.map((el) => e + el);
            result.push(...attach);
        });
        return result;
    };
    
    for (let i = 0 ; i < numbers.length; i++) {
        getPermutation(numbers, i + 1).forEach(e => {
            numSet.add(parseInt(e));
        });
    }
    [...numSet].forEach(e => {
        if (isPrime(e)) answer++;
    })
    return answer;
}