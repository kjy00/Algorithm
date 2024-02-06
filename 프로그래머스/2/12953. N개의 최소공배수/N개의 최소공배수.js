function solution(arr) {
    let answer = arr[arr.length - 1];
    const checkLCM = (num) => {
        for (let i = 0; i < arr.length; i++) 
            if (num % arr[i]) return false;
        return true;
    }
    while (!checkLCM(answer)) {
        answer++;
    }
    return answer;
}
