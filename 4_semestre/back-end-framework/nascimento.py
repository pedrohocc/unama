import datetime
dataUser = input('Digite a data de nascimento (dd/mm/aaaa): ')
dataUser = datetime.datetime.strptime(dataUser, '%d/%m/%Y').date()
dataUser.month

def verificarData(dataUser):
    dataAtual = datetime.datetime.now()
    idade = dataAtual.year - dataUser.year
    mesAtual = mesAtual
    mesUsuario = dataUser.month
    diaAtual = dataAtual.day
    diaUsuario = dataUser.day
    
    if mesUsuario > mesAtual:
        return idade - 1
    else:
        if mesAtual > mesUsuario:
            return idade 
        elif mesAtual == mesUsuario and  diaAtual >= diaUsuario:
            if diaAtual == diaUsuario:
                return f"Você esta completando {idade} anos. Parabéns"
            else:
                return idade
        else:
            return idade - 1
        
    
print(verificarData(dataUser))