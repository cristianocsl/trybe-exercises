def menor():
    lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
    menor = lista[0]  # adotar uma referência
    for elem in lista:
        if elem < menor:
            menor = elem
    # se atender, reatribui o valor encontrado à referência
    return menor


def minimo():
    lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
    return min(lista)


print('min()', minimo())
print(menor())
