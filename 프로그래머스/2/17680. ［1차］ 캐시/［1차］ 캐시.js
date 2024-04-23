function solution(cacheSize, cities) {
    let cache = [];
    let runtime = 0;
    if (cacheSize == 0) return 5 * cities.length;
    return cities.reduce((acc, city) => {
        city = city.toLowerCase();
        let idx = cache.indexOf(city);
        if (idx > -1) {
            cache.splice(idx, 1);
            cache.push(city);
            return acc + 1;
        }
        if (cache.length + 1 > cacheSize) cache.shift();
        cache.push(city);
        return acc + 5;
    }, 0)
}