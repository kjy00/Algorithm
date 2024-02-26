function solution(n, times) {
    let left = 0;
    let right = times[times.length - 1] * n;
    let answer = Math.floor((left + right) / 2);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let people = 0;
        for (let i = 0; i < times.length; i++) 
            people += Math.floor(mid / times[i]);
        if (people < n) left = mid + 1;
        else {
            right = mid - 1;
            answer = mid;
        }
    }
    return answer;
}                                                                                                                                                                                      
