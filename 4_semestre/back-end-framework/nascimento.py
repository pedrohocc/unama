import datetime
dataUser = input('Digite a data de nascimento (dd/mm/aaaa): ')
dataUser = datetime.datetime.strptime(dataUser, '%d/%m/%Y').date()
dataUser.month

def verificarData(dataUser):
    dataAtual = datetime.datetime.now()
    idade = dataAtual.year - dataUser.year
    
    if dataUser.month > dataAtual.month:
        return idade - 1
    else:
        if dataAtual.month > dataUser.month:
            return idade 
        elif dataAtual.month == dataUser.month and dataAtual.day >= dataUser.day:
            if dataAtual.day == dataUser.day:
                return f"Você esta completando {idade} anos. Parabéns"
            else:
                return idade
        else:
            return idade - 1
        
    
print(verificarData(dataUser))