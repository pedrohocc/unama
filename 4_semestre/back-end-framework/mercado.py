codigoMercadoria = input('Digite o código de uma mercadoria: ')
precoMercadoria = input('Digite o preco: ')

def verificarMercadoria(codigo,preco):
    if len(codigo) == 6:
        preco = float(preco)
        if codigo.endswith('00') == 1:
            desconto = preco * 0.9
            return f'O produto {codigoMercadoria} tem desconto de 10%.\nNovo preço {desconto}'
        else:
            return f'O produto {codigoMercadoria} NÃO tem desconto de 10%.\nPreço normal {preco}'
    else:
        return 'Codigo inválido'
    
print(verificarMercadoria(codigoMercadoria, precoMercadoria))