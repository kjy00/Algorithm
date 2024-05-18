T = int(input())

for tc in range(1, T + 1):
	n = int(input())
	arr = []
	for i in range(n):
		arr.append(list(map(int, input().split())))
	
	#solution
	answer = [0, 0] #[room num, max rooms]
	visited = set()
	def dfs(i, j, rooms, start):
		visited.add(arr[i][j])
		for [di, dj] in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
			ni, nj = i + di, j + dj
			if 0<=ni<n and 0<=nj<n and arr[ni][nj] - arr[i][j] == 1:
				dfs(ni, nj, rooms + 1, start)
		if rooms == answer[1]:
			answer[0] = min(answer[0], start)
		if rooms > answer[1]:
			answer[1] = rooms
			answer[0] = start
		return

	for i in range(n):
		for j in range(n):
			if not arr[i][j] in visited:
				dfs(i, j, 1, arr[i][j])
	print("#" + str(tc), answer[0], answer[1])
