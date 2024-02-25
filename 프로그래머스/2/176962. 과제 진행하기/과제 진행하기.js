function solution(plans) {
    let rest = [];
    let answer = [];
    plans.forEach(e => {
        let [hh, mm] = e[1].split(':');
        e[1] = hh * 60 + mm * 1;
        e[2] = Number(e[2]);
    });
    plans.sort((a, b) => a[1] - b[1]);
    plans.forEach((e, i) => {
        let [subject, start, duration] = e;
        if (i == plans.length - 1) {
            answer.push(subject); return;
        }
        //시간 부족
        if (plans[i + 1][1] - start < duration)
            rest.push([subject, duration - (plans[i + 1][1] - start)]);
        //시간 딱
        else if (plans[i + 1][1] - start == duration)
            answer.push(subject);
        //시간 남음
        else if (plans[i + 1][1] - start > duration) {
            let left = plans[i + 1][1] - start - duration;
            answer.push(subject);
            while (rest.length && left) {
                if (rest[rest.length - 1][1] <= left) {
                    left -= rest[rest.length - 1][1];
                    answer.push(rest.pop()[0]);
                } else {
                    rest[rest.length - 1][1] -= left;
                    left = 0;
                }
            }
        }
    });
    rest.reverse().forEach(e => {answer.push(e[0])});
    return answer;
}