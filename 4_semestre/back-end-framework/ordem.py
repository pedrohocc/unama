def ordernar(st1, st2):
    if(st1[0] < st2[0]):
        return f'{st1} {st2}'
    else:
        return f'{st2} {st1}'
    
print(ordernar('xbcd', 'efghi'))

def ordenarTudo(st1, st2):
    strings = st1 + st2
    lista = list(strings)
    return ''.join(sorted(lista))

print(ordenarTudo('xbcd', 'efghi'))