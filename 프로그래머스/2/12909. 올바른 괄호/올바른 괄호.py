def solution(s):
    stack = []
    for c in s:
        if c == "(":
            stack.append("(")
        else:
            if not len(stack): 
                return False
            stack.pop()
    if len(stack):
        return False
    return True
        