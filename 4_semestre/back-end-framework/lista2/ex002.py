def encontrarNumeroSorte(nome, idade):
    numeroDaSorte = ((((((idade * 4) + 8) * 60) / 240) + 22) - idade)
    return f'Parabéns {nome}! seu número da sorte é {numeroDaSorte}'
    
print(encontrarNumeroSorte('pedro',19))