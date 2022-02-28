
n = int(input())

arr = []
for i in range(n):
    arr.append(int(input()))

arr = sorted(arr, reverse = True)

for i in range(n - 1):
    print(arr[i], end = ' ')
print(arr[-1])
