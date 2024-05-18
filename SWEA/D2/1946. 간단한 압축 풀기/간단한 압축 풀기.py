T = int(input())

for tc in range(1, T +1):
	n = int(input())
	s = ""
	for i in range(n):
		[c, cnt] = input().split()
		s += c * int(cnt)

	print("#" + str(tc))
	l = len(s) // 10
	if len(s) % 10 > 0:
		l += 1
	for x in range(l):
		print(s[x * 10: x * 10 + 10])
