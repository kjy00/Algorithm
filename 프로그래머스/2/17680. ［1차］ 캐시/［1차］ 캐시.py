def solution(cacheSize, cities):
    cache = []
    answer = 0
    if cacheSize == 0:
        return 5 * len(cities)
    for city in cities:
        city = city.lower()
        if city in cache:
            del cache[cache.index(city)]
            cache.append(city)
            answer += 1
        else:
            if len(cache) + 1 > cacheSize:
                cache.pop(0)
            cache.append(city)
            answer += 5
    return answer