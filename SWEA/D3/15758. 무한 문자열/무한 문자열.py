T = int(input())
for tc in range(1, T + 1):
	[s1, s2] = input().split()
	r1 = ""
	r2 = ""
	for i in range(1, len(s1) + 1):
		seperator = s1[0:i]
		splited = s1.split(seperator)
		splited = list(filter(lambda x: x != "", splited))
		if len(splited) == 0:
			r1 = seperator
			break
	for i in range(1, len(s2) + 1):
		seperator = s2[0:i]
		splited = s2.split(seperator)
		splited = list(filter(lambda x: x != "", splited))
		if len(splited) == 0:
			r2 = seperator
			break
	answer = "no"
	if (r1 == r2): answer = "yes"
	print("#" + str(tc), answer)

