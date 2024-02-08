function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let answer = [0, 10000000];
    while (right < sequence.length && left < sequence.length) {
        if (sum < k) {
            right++;
            sum += sequence[right];
        }
        else if (sum > k) {
            sum -= sequence[left];
            left++;
        }
        else {
            if (answer[1] - answer[0] > right - left) answer = [left, right];
            if (right == left) {
                left++; right++;
                if (right < sequence.length) sum = sequence[right];
            } else {
                sum -= sequence[left];
                left++;
            }
        }
    }
    return answer;
}