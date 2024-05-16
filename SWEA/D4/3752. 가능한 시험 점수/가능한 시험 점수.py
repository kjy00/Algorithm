T = int(input())
for t in range(1, T + 1):
	N = int(input())
	score = list(map(int, input().split()))
	visited = [1] + [0] * sum(score)
	sums = [0]
	for s in score:
		for i in range(len(sums)):
			if not visited[s + sums[i]]:
				visited[s + sums[i]] = 1
				sums.append(s + sums[i])
	print("#" + str(t), len(sums))
