def verificarContato(item1Valor1, item1Valor2, item1Valor3, item1Valor4, item2Valor1, item2Valor2,item2Valor3, item2Valor4):
    if(item1Valor3 < item2Valor1):
        return False
    else:
        return True
    
print(verificarContato(0, 0, 1, 1, 0, 0, 1, 1))
print(verificarContato(0,0,2,2,1,1,3,3 ))
print(verificarContato(0,0,1,1,2,2,3,3))