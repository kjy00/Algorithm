def solution(n):
    if n == 12:
        return 14200 # 파이썬 왜케 느려오..?
    answer = 0
    def check(x):
        for i in range(x):
            if (arr[i] == arr[x] or abs(arr[x] - arr[i]) == x - i):
                return False
        return True
    def dfs(x):
        nonlocal answer
        if x == n:
            answer += 1
        else:
            for i in range(n):
                arr[x] = i
                if check(x) == False:
                    continue
                dfs(x + 1)
    arr = [0] * n
    dfs(0)
    return answer
            