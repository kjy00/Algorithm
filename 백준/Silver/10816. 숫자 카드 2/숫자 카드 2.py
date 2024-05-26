N = int(input())
nums = list(map(int, input().split()))
nums.sort()
M = int(input())
targets = list(map(int, input().split()))
ans = []

def findLower(t):
	global nums
	left = 0
	right = len(nums)
	while left < right:
		mid = (left + right) // 2
		if (nums[mid] >= t): right = mid
		else: left = mid +1
	return left

def findUpper(t):
	global nums
	left = 0
	right = len(nums)
	while left < right:
		mid = (left + right) // 2
		if nums[mid] <= t :
			left = mid + 1
		else: 
			right = mid
	return left

for t in targets:
	lower = findLower(t)
	upper = findUpper(t)
	print(upper - lower, end=" ")
