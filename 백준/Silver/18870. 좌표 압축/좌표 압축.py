N = int(input())
nums = list(map(int, input().split()))
arr = list(set(nums))
arr.sort()

for n in nums:
	l, r, m = 0, len(arr) - 1, (len(arr) - 1) // 2
	while l <= r:
		m = (l + r) // 2
		if arr[m] < n:
			l = m + 1
		elif arr[m] > n:
			r = m - 1
		else: break
	print(m, end=" ")
