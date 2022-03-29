"""
ordenação por bolha ( bubble sort ), têm esse nome, pois a movimentação dos
elementos lembra o movimento das bolhas em um refrigerante. São realizadas
múltiplas iterações sobre a coleção, sempre comparando o valor ao item
adjacente e realizando a troca daqueles que estão fora de ordem. A cada
iteração o próximo maior valor é colocado em sua posição correta, ou seja,
cada item se desloca como uma bolha para a posição a qual pertence.
"""


def bubble_sort(array):
    # variável utilizado na iteração
    # para marcar se houve ou não trocas naquela iteração
    # Quando falsa, indica que o array está ordenado
    has_swapped = True

    # armazena o número de iterações para evitar
    # a iteração sobre índices já ordenados
    num_of_iterations = 0

    # Enquanto ainda não está ordenado (ocorreram trocas na iteração)
    while has_swapped:
        has_swapped = False  # ponto de parada

        # percorra o array até o ultimo índice não ordenado
        for index in range(len(array) - num_of_iterations - 1):
            # caso a posição corrente
            # seja maior que a posterior
            if array[index] > array[index + 1]:
                # realiza a troca entre as posições
                array[index], array[index + 1] = array[index + 1], array[index]
                # marca que tivemos trocas nesta iteração
                has_swapped = True
        num_of_iterations += 1

    return array


print(bubble_sort([100, 4, 6, 33, 56, 67]))
