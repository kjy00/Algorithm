from collections import deque
def solution(A, B):
    A.sort(reverse=True)
    B.sort(reverse=True)
    B = deque(B)
    if A[-1] >= B[0]: return 0
    answer = 0
    a = 0
    while len(B):
        if A[a] < B[0]:
            answer += 1
            B.popleft()
        elif A[a] >= B[0]:
            B.pop()
        a += 1
    return answer