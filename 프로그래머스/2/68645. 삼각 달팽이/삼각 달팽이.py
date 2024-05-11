def check(i, j, n):
    if (i < 0 or j < 0 or j > i or i >= n):
        return False
    return True

def solution(n):
    arr = []
    answer = []
    dir = [[1, 0], [0, 1], [-1, -1]]
    num = n * (n + 1) / 2
    for i in range(n):
        arr.append([0] * (i + 1))
    x = 2
    d = 0
    [i, j] = [0, 0]
    arr[0][0] = 1
    while x <= num:
        [ni, nj] = [i + dir[d][0], j + dir[d][1]]
        if (check(ni, nj, n) == False or arr[ni][nj] != 0):
            d += 1
            d %= 3
            [ni, nj] = [i + dir[d][0], j + dir[d][1]]
        arr[ni][nj] = x
        [i, j] = [ni, nj]
        x += 1
    for a in arr:
        answer += a
    return answer
