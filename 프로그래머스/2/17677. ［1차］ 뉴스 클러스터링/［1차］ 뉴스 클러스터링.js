function solution(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    
    for (let i = 0; i < str1.length - 1; i++) {
        let s = (str1[i] + str1[i + 1]).toLowerCase();
        if (!/^[a-z]*$/.test(s)) continue;
        if (obj1[s]) obj1[s]++;
        else obj1[s] = 1;
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        let s = (str2[i] + str2[i + 1]).toLowerCase();
        if (!/^[a-z]*$/.test(s)) continue;
        if (obj2[s]) obj2[s]++;
        else obj2[s] = 1;
    }
    
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (!key1.length && !key2.length) return 65536;
    let intersection = 0;
    let union = 0;
    
    key1.forEach(key => {
        if (!obj2[key]) union += obj1[key];
        else {
            intersection += Math.min(obj1[key], obj2[key]);
            union += Math.max(obj1[key], obj2[key]);
        }
    })
    key2.forEach(key => {
        if (obj1[key]) return;
        union += obj2[key];
    })
    return parseInt(intersection / union * 65536);
}