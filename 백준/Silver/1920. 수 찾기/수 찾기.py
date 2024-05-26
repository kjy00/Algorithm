N = int(input())
nums = list(map(int, input().split()))
nums.sort()
M = int(input())
targets = list(map(int, input().split()))

for t in targets:
	left = 0
	right = len(nums) - 1
	while (left <= right):
		mid = (left + right) // 2
		if nums[mid] > t: right = mid - 1
		elif nums[mid] < t: left = mid + 1
		else: break
	if (left > right): print(0)
	else: print(1)
