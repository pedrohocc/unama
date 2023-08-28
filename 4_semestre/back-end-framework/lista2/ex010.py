import datetime


def calulcarDiferencaDatas(dataMenorString, dataMaiorString):
    dataMenor = datetime.datetime.strptime(dataMenorString, '%d/%m/%Y').date()
    dataMaior = datetime.datetime.strptime(dataMaiorString, '%d/%m/%Y').date()
    tempo = (dataMaior.year - dataMenor.year) * 365 + (dataMaior.month - dataMenor.month) * 30 + (dataMaior.day - dataMenor.day)
    return tempo

print(calulcarDiferencaDatas('02/03/1982', '01/02/1983'))