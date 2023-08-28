def adicionarHastag(string):
    metade = len(string) // 2
    return f'#{string[:metade]}#{string[metade:]}#'

print(adicionarHastag('abcde'))