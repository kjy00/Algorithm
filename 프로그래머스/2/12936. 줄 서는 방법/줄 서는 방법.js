function solution(n, k) {
    const answer = new Array(n).fill(0);
    const nums = new Array(n);
    for (let i = 0; i < n; i++) nums[i] = i + 1;
    const factorial = (num) => {
        let res = 1;
        for (let i = 1; i <= num; i++) res *= i;
        return res;
    }
    let order = 0;
    let index = 0;
    while (index < n) {
        let f = factorial(n - index - 1);
        let i = 0;
        for (i = 0; i < nums.length; i++)
            if (order + f * i > k - 1) break;
        i--;
        answer[index] = nums[i];
        nums.splice(i, 1);
        order += f * i;
        index++;
    }
    return answer;
}