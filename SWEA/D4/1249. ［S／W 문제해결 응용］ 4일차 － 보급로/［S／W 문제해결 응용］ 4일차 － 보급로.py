from collections import deque

def solution(tc, arr):
	queue = deque([[0, 0, arr[0][0]]])
	dp = {}
	answer = 90000
	while len(queue):
		[i, j, cost] = queue.popleft()
		if (i == len(arr) - 1 and j == len(arr) - 1):
			answer = min(answer, cost)
			continue
		key = ",".join([str(i), str(j)])
		if not key in dp:
			dp[key] = cost
		else:
			if dp[key] <= cost:
				continue
			dp[key] = cost
		# down
		if i + 1 < len(arr): queue.append([i + 1, j, cost + arr[i + 1][j]])
		# up
		if i - 1 > 0: queue.append([i - 1, j, cost + arr[i - 1][j]])
		# right
		if j + 1 < len(arr): queue.append([i, j + 1, cost + arr[i][j + 1]])
		# left
		if j - 1 > 0: queue.append([i, j - 1, cost + arr[i][j - 1]])
	print("#" + str(tc), answer)

T = int(input())
for tc in range(1, T + 1):
	n = int(input())
	arr = []
	for i in range(n):
		arr.append(list(map(int, list(input()))))
	solution(tc, arr)
