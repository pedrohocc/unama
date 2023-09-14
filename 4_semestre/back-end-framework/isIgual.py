def isIgual(tuplinha):
    if tuplinha[0] == tuplinha[-1]:
        return True
    else:
        return False
    
print(isIgual((1,2,3,4,5,6,7,8,1,9)))