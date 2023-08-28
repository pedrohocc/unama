def alterarLetra(string, caractere, index):
    if(index < 0 or index >= len(string)):
        return 'invalido'
    else:
        lista = list(string)
        lista[index] = caractere
        return ''.join(lista)
    
print(alterarLetra('pedro', 'y', 2))