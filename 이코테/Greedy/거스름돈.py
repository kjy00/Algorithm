'''python
N = int(input())
num = 0

while 1:
    if N > 500:
        N = N - 500
        num += 1
    elif N > 100:
        N = N - 100
        num += 1
    elif N > 50:
        N = N - 50
        num += 1
    elif N > 10:
        N = N - 10
        num += 1
    else :
        break
print(num)
