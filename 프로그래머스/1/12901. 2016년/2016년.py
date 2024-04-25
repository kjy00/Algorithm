def solution(a, b):
    date = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    day = 0
    for month in range(0, a - 1):
        day += days[month]
    day += b
    return date[(day - 1) % 7]