import math
def solution(s):
    answer = 0
    for i in range(0, len(s)):
        for j in range(i, len(s)):
            newS = s[i:j + 1]
            if newS == newS[::-1]:
                answer = max(len(newS), answer)
    return answer