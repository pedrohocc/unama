def rotacionarString(string):
    if(len(string) >= 3):
        return string[-3:] + string[:-3]
    else:
        return 'invalido'
    
print(rotacionarString('abcdefg'))