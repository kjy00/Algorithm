answer = [0, 0] # 0개수, 1개수
def dfs(arr):
    global answer
    if len(arr) == 1:
        answer[arr[0][0]] += 1
        return
    flag = True
    for ar in arr:
        for a in ar:
            if a != arr[0][0]:
                flag = False
                break
        if flag == False: break
    if flag:
        answer[arr[0][0]] += 1
        return
    else:
        a1 = []
        a2 = []
        a3 = []
        a4 = []
        for i in range(len(arr) // 2):
            a1.append(arr[i][0:len(arr) // 2])
            a2.append(arr[i][len(arr) // 2:])
        for i in range(len(arr) // 2, len(arr)):
            a3.append(arr[i][0:len(arr) // 2])
            a4.append(arr[i][len(arr) // 2:])
        dfs(a1)
        dfs(a2)
        dfs(a3)
        dfs(a4)
    return

def solution(arr):
    global answer
    dfs(arr)
    return answer