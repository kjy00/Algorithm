def solution(jobs):
    answer = 0
    n = len(jobs)
    time = 0
    jobs.sort(key=lambda x : x[0])
    while len(jobs):
        idx = -1
        for i in range(len(jobs)): # 작업 가능한 것 중 소요시간 짧은
            [req, t] = jobs[i]
            if req > time: break
            if (idx == -1) or (jobs[idx][1] > t):
                idx = i
        if idx == -1:
            time += 1
        else:
            answer += time - jobs[idx][0] + jobs[idx][1]
            time += jobs[idx][1]
            jobs.pop(idx)
    return answer // n
        