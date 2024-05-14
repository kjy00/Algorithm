def solution(tc, a, b):
	answer = -100000
	for i in range(0, len(b) - len(a) + 1):
		tmp = 0
		for j in range(len(a)):
			tmp += a[j] * b[i + j]
		answer = max(tmp, answer)
	print("#" + str(tc), answer)

T = int(input())
for tc in range(1, T + 1):
	[n, m] = map(int ,input().split())
	a = list(map(int, input().split()))
	b = list(map(int, input().split()))
	if n > m: [a, b] = [b, a]
	solution(tc, a, b)
