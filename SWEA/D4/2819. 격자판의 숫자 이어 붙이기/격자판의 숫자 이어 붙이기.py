result = set([])
map = []
def dfs(i, j, num):
	global map
	if len(num) == 7:
		global result
		result.add(num)
		return
	#up
	if i - 1 >= 0: dfs(i - 1, j, num + map[i - 1][j])
	#down
	if i + 1 < 4: dfs(i + 1, j, num + map[i + 1][j])
	#left
	if j - 1 >= 0: dfs(i, j - 1, num + map[i][j - 1])
	#right
	if j + 1 < 4: dfs(i, j + 1, num + map[i][j + 1])


T = int(input())

for t in range(1, T + 1):
	map = []
	result = set([])
	for i in range(4):
		map.append(list(input().split()))
	for i in range(4):
		for j in range(4):
			dfs(i, j, map[i][j])
	print("#" + str(t), len(result))

