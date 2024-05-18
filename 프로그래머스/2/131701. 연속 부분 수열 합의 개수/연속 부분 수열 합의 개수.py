def solution(elements):
    answer = set()
    arr = elements.copy() * 2
    for l in range(1, len(elements) + 1):
        for i in range(0, len(elements)):
            answer.add(sum(arr[i: i + l]))
    return len(answer)