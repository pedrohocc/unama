def criarLista(dado):
    lista = []
    for i in range(2,dado+1,2):
        lista.append(i)
    return lista

print(criarLista(11))