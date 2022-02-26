n, m = map(int, input().split())
icetray = list()
for i in range(n):
    icetray.append(list(map(int, input())))

ice = 0

def dfs(x, y):
    if x < 0 or x >= n or y < 0 or y >= m :
        return
    if icetray[x][y] == 0 :
        icetray[x][y] = 1
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
        return

for x in range(n):
    for y in range(m):
        if icetray[x][y] == 0 :
            dfs(x, y)
            ice += 1
print(ice)
