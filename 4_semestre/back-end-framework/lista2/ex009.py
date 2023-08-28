def rotacionarPorParametro(string, vezes):
    vezes = vezes % len(string)
    return string[-vezes:] + string[:-vezes]

print(rotacionarPorParametro('pedro', 10))