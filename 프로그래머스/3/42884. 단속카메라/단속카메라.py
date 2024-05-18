def solution(routes):
    cctv = []
    routes.sort(key=lambda x: x[1])
    for r in routes:
        [start, end] = r
        flag = False
        for cc in cctv:
            if start <= cc <= end:
                flag = True
                break
        if flag == False:
            cctv.append(end)
    return len(cctv)