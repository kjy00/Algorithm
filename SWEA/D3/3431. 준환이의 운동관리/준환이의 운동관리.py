
T = int(input())

for tc in range(1, T + 1):
	answer = 0
	[L, U, X] = map(int, input().split())
	if X < L: answer = L - X
	elif X <= U: answer = 0
	else: answer = -1
	print("#" + str(tc), answer)
