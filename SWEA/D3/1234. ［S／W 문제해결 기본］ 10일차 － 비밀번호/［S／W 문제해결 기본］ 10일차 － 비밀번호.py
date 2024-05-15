from collections import deque
def solution(tc, arr):
	i = 0
	stack = deque([])
	arr = deque(arr)
	while len(arr):
		stack.append(arr.popleft())
		while len(stack) >= 2 and stack[-1] == stack[-2]:
			stack.pop()
			stack.pop()
	print("#" + str(tc), "".join(stack))

for tc in range(1, 11):
	[n, arr] = (input().split())
	arr = list(arr)
	solution(tc, arr)
