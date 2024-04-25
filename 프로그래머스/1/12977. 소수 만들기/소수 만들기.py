import math
from itertools import combinations

def isPrime(num):
    for i in range(2, int(math.sqrt(num)) + 1):
        if (num % i == 0):
            return False
    return True

def solution(nums):
    answer = 0
    combi = combinations(nums, 3)
    for c in combi:
        if isPrime(sum(c)):
            answer += 1
    return answer