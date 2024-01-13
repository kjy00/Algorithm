function solution(cards) {
    let answer = 0;
    const dp = {};
    const combi = [];
    for (let i = 0; i < cards.length - 1; i++) {
        for (let j = i; j < cards.length; j++)
            combi.push([i, j]);
    }
    const openBox = (box, opened) => {
        let count = 0;
        while(1) {
            if (opened[box]) break;
            opened[box] = true;
            box = cards[box] - 1;
            count++;
        }
        return count;
    };
    combi.forEach(e => {
        const opened = new Array(cards.length).fill(false);
        answer = Math.max(answer, openBox(e[0], opened) * openBox(e[1], opened));
    })
    return answer;
}