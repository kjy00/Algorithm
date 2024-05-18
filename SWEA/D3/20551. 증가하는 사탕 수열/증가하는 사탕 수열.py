T = int(input())

for tc in range(1, T + 1):
	[b1, b2, b3] = map(int, input().split())
	answer = 0
	if b1 < b2 < b3:
		print("#" + str(tc), 0)
		continue
	if b3 <= b2:
		answer += b2 - b3 + 1
		b2 = b3 - 1
	if b2 <= b1:
		answer += b1 - b2 + 1
		b1 = b2 - 1
	if b1 <= 0 or b2 <= 0 or b3 <= 0:
		answer = -1
	print("#" + str(tc), answer)

