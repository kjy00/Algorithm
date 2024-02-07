function solution(topping) {
    const cheolsu = new Map();
    const bro = new Set();
    let answer = 0;
    topping.forEach((e, i) => {
        if (!cheolsu.get(e)) cheolsu.set(e, 1);
        else cheolsu.set(e, cheolsu.get(e) + 1);
    })
    for (let i = 0; i < topping.length; i++) {
        bro.add(topping[i]);
        let c = cheolsu.get(topping[i]);
        if (c) {
            cheolsu.set(topping[i], c - 1);
            if (c - 1 == 0) delete cheolsu.delete(topping[i]);
        }
        if (bro.size == cheolsu.size) answer++;
        else if (bro.size > cheolsu.size) break;
    }
    return answer;
}