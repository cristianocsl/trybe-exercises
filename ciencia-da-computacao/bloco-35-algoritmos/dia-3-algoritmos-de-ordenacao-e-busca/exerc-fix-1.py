"""ordenação por seleção ( selection sort em inglês)
divide o array em duas partes, uma já ordenada e outra de itens a serem
 ordenados. Em seguida, selecionaremos o menor elemento na lista não ordenada
  e o incluiremos na lista ordenada. Isto será feito continuamente até que
   nossa lista de elementos não ordenados se esgote, e logo teremos uma lista
    com os itens ordenados.
"""


def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    for i in range(len(array)):
        minimum = i  # i é a posição de cada elemento do array

        # itera sobre os elementos não ordenados
        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j  # se atender o if, o mín valor estará na posição j

        # após encontrar o menor valor
        # ao invés de criar um novo array (o que aumenta complexidade de
        #  espaço) realizamos a substituição entre o menor elemento
        # e a posição i que corresponde ao primeiro elemento não ordenado
        # que consequentemente passará a ser o último ordenado

        array[minimum], array[i] = array[i], array[minimum]
        # array[minimum], (no 1° loop, array[minimum == 0] == 100)
        # array[i] (no 1° loop, array[i == 0] == 100)
        # = a atribuição ocorre por desempacotamento
        # array[i == 0] == 100
        # array[minimum == 1] == 4
        # array[1], array[0] = 100, 4
        # a ordem será: [4, 100]

    return array


print(selection_sort([100, 4, 6, 33, 56, 67]))
