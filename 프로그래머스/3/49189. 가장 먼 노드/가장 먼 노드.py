from collections import deque
def solution(n, edge):
    dic = {}
    answer = 0
    q = deque([[1, 0]])
    visited = set([1])
    dist = [0] * n
    for e in edge:
        [n1, n2] = e
        if not n1 in dic: dic[n1] = []
        if not n2 in dic: dic[n2] = []
        dic[n1].append(n2)
        dic[n2].append(n1)
    while len(q):
        [node, d] = q.popleft()
        for n in dic[node]:
            if n in visited: continue
            q.append([n, d + 1])
            dist[n - 1] = d + 1
            visited.add(n)
    maximum = max(dist)
    for d in dist:
        if d == maximum:
            answer += 1
    return answer