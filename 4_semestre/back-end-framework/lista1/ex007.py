def verificarColocacao(vitoriasTime1, empatesTime1, saldoTime1, vitoriasTime2, empatesTime2, saldoTime2):
    
    pontosTime1 = (vitoriasTime1*3) + empatesTime1
    pontosTime2 = (vitoriasTime2*3) + empatesTime2
    
    if(pontosTime1 != pontosTime2):
        return "Cormengo" if pontosTime1 > pontosTime2 else "Flaminthias"
    else:
        if(saldoTime1 != saldoTime2):
            return "Cormengo" if saldoTime1 > saldoTime2 else "Flaminthians"
        else:
            return "Empate"
        
print(verificarColocacao(10,5,18,11,2,18))
print(verificarColocacao(10,5,18,11,1,18))
print(verificarColocacao(9,5,-1,10,2,10))