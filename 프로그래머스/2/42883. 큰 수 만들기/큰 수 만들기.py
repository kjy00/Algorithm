def solution(number, k):
    arr = []
    for n in number:
        n = int(n)
        while k > 0 and len(arr) > 0:
            if arr[-1] >= n:
                break
            arr.pop()
            k -= 1
        arr.append(n)
    if (k > 0):
        arr = arr[0:len(arr) - k]
    return "".join(map(str, arr))