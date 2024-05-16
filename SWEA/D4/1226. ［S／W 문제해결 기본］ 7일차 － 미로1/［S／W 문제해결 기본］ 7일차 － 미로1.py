from collections import deque
for tc in range(1, 11):
	arr = []
	input()
	answer = 0
	visited = set()
	que = deque([[1, 1]])
	pos = [1, 1]
	for i in range(16):
		arr.append(list(map(int, list(input()))))
	while len(que):
		[i, j] = que.popleft()
		visited.add((i, j))
		if i == 13 and j == 13:
			answer = 1
			break
		for [di, dj] in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
			if (0 <= i + di < 16 and 0 <= j + dj < 16 
				and arr[i + di][j + dj] != 1 and not((i + di, j + dj) in visited)):
				que.append([i + di, j + dj])
	print("#" + str(tc), answer)


