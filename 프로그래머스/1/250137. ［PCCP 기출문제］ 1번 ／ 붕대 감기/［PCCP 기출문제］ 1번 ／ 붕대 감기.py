import math
def solution(bandage, health, attacks):
    [t, x, y] = bandage
    curHealth = health
    for i in range(len(attacks)):
        recoverTime = attacks[i][0] - 1
        if (i != 0):
            recoverTime -= attacks[i - 1][0]
        recovery = recoverTime * x + math.floor(recoverTime / t) * y
        curHealth = min(health, curHealth + recovery)
        #attack
        curHealth -= attacks[i][1]
        print(curHealth)
        if (curHealth < 1):
            return -1
    return curHealth