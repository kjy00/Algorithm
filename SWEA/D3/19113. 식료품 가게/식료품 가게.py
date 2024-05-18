
T = int(input())

for tc in range(1, T + 1):
	n = int(input())
	arr = list(map(int, input().split()))
	idx = 0
	answer = []
	while len(arr):
		discounted = arr.pop(0)
		original = discounted * 4 / 3
		answer.append(discounted)
		arr.pop(arr.index(original))
	print("#" + str(tc), *answer)
