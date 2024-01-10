function solution(numbers) {
    //참고한 풀이...
    numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);
    let answer = numbers.join("");
    return answer[0] === '0' ? '0' : answer;
}