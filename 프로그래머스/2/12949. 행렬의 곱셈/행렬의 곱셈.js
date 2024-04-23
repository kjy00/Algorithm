function solution(arr1, arr2) {
    let answer = new Array(arr1.length);
    for (let i = 0; i < answer.length; i++)
        answer[i] = new Array(arr2[0].length).fill(0);
    for (let i = 0; i < arr2[0].length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                answer[j][i] += arr1[j][k] * arr2[k][i];
            }
        }
    }
    return answer;
}
