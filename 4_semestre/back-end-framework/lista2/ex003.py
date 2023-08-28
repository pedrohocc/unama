def retornarStringAlterada(string1, string2):
    if(len(string1) >= 15 and len(string2) >= 15):
        return string1[5:] + string2[:-10]
    else:
        return 'Invalido'
    
print(retornarStringAlterada('tentandoescreveralgo', 'tentandoescreveralgo'))