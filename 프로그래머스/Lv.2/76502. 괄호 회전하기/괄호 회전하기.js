function solution(s) {
    const open = "[({"; const close = "])}";
    const obj = {"]":"[", ")":"(", "}":"{"};
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (close.includes(s[i])) continue;
        const stack = [];
        let j = 0;
        for (j = 0; j < s.length; j++) {
            let idx = j + i >= s.length ? j + i - s.length : j + i;
            if (open.includes(s[idx])) stack.push(s[idx]);
            else {
                const c = stack.pop();
                if (c != obj[s[idx]]) break;
            }
        }
        if (j == s.length && stack.length == 0) answer++;
    }
    return answer;
}