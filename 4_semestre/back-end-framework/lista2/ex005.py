def retornarStringNaMetade(string):
    metade = (len(string)) // 2
    return f'{string[:metade]}{string}{string[metade:]}'

print(retornarStringNaMetade('abcde'))