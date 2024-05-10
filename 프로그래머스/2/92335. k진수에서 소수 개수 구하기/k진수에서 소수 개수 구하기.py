import math
def converter(n, k):
    arr = []
    while n > 0:
        arr.append(str(n % k))
        n = n // k
    arr.reverse()
    return "".join(arr)

def isPrime(n):
    if (n < 2):
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if (n % i == 0):
            return False
    return True
def solution(n, k):
    answer = 0
    converted = converter(n, k)
    primes = converted.split('0')
    primes = list(filter(lambda x : x != "", primes))
    for p in primes:
        if (isPrime(int(p))):
            answer += 1
    return answer