def verificarMeia(idade, carteira):
    if(carteira) :
        return 'Meia entrada!'
    else:
        return 'Meia entrada!' if idade >= 65 or idade <= 21 else 'Sem meia entrada!'
    

print(verificarMeia(65, True))