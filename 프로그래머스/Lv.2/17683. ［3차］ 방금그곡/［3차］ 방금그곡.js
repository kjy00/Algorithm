function solution(m, musicinfos) {
    m = m.replaceAll("C#", "c");
    m = m.replaceAll("D#", "d");
    m = m.replaceAll("F#", "f");
    m = m.replaceAll("G#", "g");
    m = m.replaceAll("A#", "a");
    let plays = [];
    for (let i = 0; i < musicinfos.length; i++) {
        let [start, end, title, note] = musicinfos[i].split(",");
        note = note.replaceAll("C#", "c");
        note = note.replaceAll("D#", "d");
        note = note.replaceAll("F#", "f");
        note = note.replaceAll("G#", "g");
        note = note.replaceAll("A#", "a");
        const [startH, startM] = start.split(":");
        const [endH, endM] = end.split(":");
        const duration = (endH*1 - startH*1) * 60 + endM*1 - startM*1;
        const play = note.repeat(parseInt(duration / note.length) + 1).slice(0, duration);
        plays.push([title, play]);
    }
    plays.sort((a, b) => b[1].length - a[1].length);
    for (let i = 0; i < plays.length; i++)
        if (plays[i][1].includes(m)) return plays[i][0];
    return "(None)"
}