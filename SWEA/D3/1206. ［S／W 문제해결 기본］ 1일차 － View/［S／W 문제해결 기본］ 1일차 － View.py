def solution(tc, arr):
	answer = 0
	for i in range(2, len(arr) - 2):
		highest = max(arr[i - 2: i] + arr[i + 1: i + 3])
		if highest > arr[i]: continue
		answer += arr[i] - highest
	print("#" + str(tc), answer)



for tc in range(1, 11):
	input()
	arr = list(map(int, input().split()))
	solution(tc, arr)
