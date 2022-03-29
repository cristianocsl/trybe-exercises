# Um exemplo de implementação da busca linear


def search(array, value):
    for index, element in enumerate(array):
        if element == value:
            return index
    return -1


print(search([1, 2, 3], 2))  # saída: 1
print(search([1, 2, 3], 4))  # saída: -1

# mas esta não é a maneira mais pythonica,
# pois se você pedir o elemento na posição -1
# a lista irá te retornar o último elemento
# portanto uma melhor aproximação seria levantar uma exceção
# e é exatamente assim que o método index de uma lista é implementado
print([1, 2, 3].index(2))  # saída: 1
print([1, 2, 3].index(4))  # saída: Exception("4 is not in list")

# o método index é equivalente ao search implementado,
# porém lançando uma exceção caso não encontre.