def solution(tc, arr):
	if arr[0] == arr[1]:
		print("#" + str(tc), arr[0])
	else:
		print("#" + str(tc), 1)

T = int(input())

for tc in range(1, T + 1):
	arr = list(map(int, input().split()))
	solution(tc, arr)
