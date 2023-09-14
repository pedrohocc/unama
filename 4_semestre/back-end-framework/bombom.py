def calcularBombo(dindin, precoBombom):
    quantidadeBombom = dindin // precoBombom 
    precoTotal = (quantidadeBombom * precoBombom)
    troco = dindin - precoTotal
    return (quantidadeBombom, troco)

print(calcularBombo(10, 4))