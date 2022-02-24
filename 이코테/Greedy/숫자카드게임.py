n, m = map(int, input().split())
res = 0

for i in range(n):
    arr = list(map(int, input().split()))
    res = max(min(arr), res)

print(res)
