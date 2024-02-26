function solution(n, words) {
    const used = new Set();
    const players = {};
    let cur = 0;
    for (let i = 1; i <= n; i++) players[i] = 0;
    for (let i = 0; i < words.length; i++) {
        if (used.has(words[i]))
            return [(cur % n) + 1, players[(cur % n) + 1] + 1];
        if (i != 0 && words[i - 1][words[i - 1].length - 1] != words[i][0])
            return [(cur % n) + 1, players[(cur % n) + 1] + 1];
        players[(cur % n) + 1]++;
        used.add(words[i]);
        cur++;
    }
    return [0, 0];
}