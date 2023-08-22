def verificarQuantidade(competidores, quantidadePapel, quantidadeFolha):
    calculo = quantidadePapel / competidores
    return "Suficiente" if calculo >= quantidadeFolha else "Insuficiente"

print(verificarQuantidade(10,100,10))
print(verificarQuantidade(10,90,10))
print(verificarQuantidade(5,40,2))