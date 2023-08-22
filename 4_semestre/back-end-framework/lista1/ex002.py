import math
def delta(a,b,c):
    operacao = math.pow(b,2) - 4 * a * c
    return operacao

def equacao(a,b,c):
    resultadoDelta = delta(a,b,c)
    raizDelta = math.sqrt(resultadoDelta)
    x1 = (-b + raizDelta) / 2 * a
    x2 = (-b - raizDelta) / 2 * a
    return f'O x1 é {x1} e o x2 é {x2}'

print(equacao(1,-1,-12))