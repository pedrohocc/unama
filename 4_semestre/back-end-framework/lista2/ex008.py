def rotacionarPorValor(string, index):
    if index < len(string):
        return string[-index:] + string[:-index]
    else:
        return 'invalido'
    
print(rotacionarPorValor('abcefg', 3))