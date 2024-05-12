
def solution(tc, arr):
	dic = {}
	maximum = 0
	answer = 0
	for a in arr:
		if not a in dic:
			dic[a] = 0
		dic[a] += 1
	for key in dic.keys():
		if dic[key] > maximum:
			answer = key
			maximum = dic[key]
		if dic[key] == maximum:
			answer = max(answer, key)
			maximum = dic[key]
	print("#" + str(tc), answer)
	return

T = int(input())
for t in range(1, T + 1):
	tc = int(input())
	arr = list(map(int, input().split()))
	solution(t, arr)

