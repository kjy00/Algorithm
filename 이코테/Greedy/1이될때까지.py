n, k = map(int, input().split())
res = 0

while n != 1:
    if n % k == 0:
        res += 1
        n /= k
    else:
        res += 1
        n -= 1
print(res)
