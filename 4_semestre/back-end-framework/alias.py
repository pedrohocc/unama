def teste1(): 
    a = 10
    a, b = 3*a, a
    return a, b

def teste2():
    a = 10
    a = 3 * a
    b = a
    return a, b

print(teste1())
print(teste2())