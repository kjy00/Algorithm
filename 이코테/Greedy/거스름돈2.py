n, m, k = map(int,input().split())
arr = list(map(int, input().split()))

arr.sort()
res = 0

res += (arr[-1] * k + arr[-2]) * int(m / (k+1))
res += (arr[-1]) * (m % (k+1))

print(res)
