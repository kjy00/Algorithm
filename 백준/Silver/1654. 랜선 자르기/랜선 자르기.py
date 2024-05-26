[K, N] = map(int, input().split())

ropes = []
maximum = 0
for i in range(K):
	n = int(input()) 
	ropes.append(n)
	maximum = max(maximum, n)

l, r = 1, maximum + 1
mid = (l + r) // 2

while l < r:
	mid = (l + r) // 2
	cnt = 0
	for rope in ropes: 
		cnt += rope // mid
	if cnt >= N: l = mid + 1
	else: r = mid
print(l - 1)
