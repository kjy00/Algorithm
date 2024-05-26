N = int(input())
nums = []
for n in range(N): nums.append(int(input()))
nums.sort()
two = set()

for i in range(len(nums)):
	for j in range(len(nums)):
		two.add(nums[i] + nums[j])

for i in range(len(nums) - 1, -1, -1):
	f = False
	for j in range(i):
		target = nums[i] - nums[j]
		if (target in two):
			print(nums[i])
			f = True
			break
	if f: break	
