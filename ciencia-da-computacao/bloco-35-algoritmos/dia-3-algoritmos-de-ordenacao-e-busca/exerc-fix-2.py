"""
A ordenação por inserção ( insertion sort ), tem esse nome por inserir um
 elemento de cada vez em sua posição correta.

É mais eficiente que a ordenação por seleção e também considerada mais simples.
"""


def insertion_sort(array):
    for index in range(len(array)):
        current_value = array[index]
        current_position = index
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and
            array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
            # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array


print(insertion_sort([100, 4, 6, 33, 56, 67]))
