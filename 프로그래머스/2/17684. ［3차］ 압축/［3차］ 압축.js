const AtoZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(msg) {
    const dictionary = {};
    const answer = [];
    let nextIndex = 27;
    const addExcludeStringSet = (start, end) => {
        if (end > msg.length - 1) return;
        const stringSet = msg.slice(start, end + 1); 
        if (dictionary[stringSet] === undefined) {
            dictionary[stringSet] = nextIndex++;
            return stringSet;
        }
        return addExcludeStringSet(start, end + 1);
    };
    [...AtoZ].reduce((acc, cur) => {
        dictionary[cur] = acc;
        return acc + 1;
    }, 1);
    
    for (let i = 0; i < msg.length; i++) {
        const stringSet = addExcludeStringSet(i, i);
        const current = msg.slice(i, stringSet ? i + stringSet.length - 1 : msg.length);
        answer.push(dictionary[current]);
        i += stringSet?.length - 2;
    }
    return answer;
}