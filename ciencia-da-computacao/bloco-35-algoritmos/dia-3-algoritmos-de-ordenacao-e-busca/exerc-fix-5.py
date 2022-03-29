def quicksort(array, low, high):
    # caso base: se já atingiu a menor porção (1)
    if len(array) == 1:
        return array

    # os índices irão se cruzar quando o array estiver ordenado
    if low < high:
        # índice da partição é o índice onde o array foi divido
        # e é determinado a partir do pivô.
        # Este índice já está ordenado
        partition_index = partition(array, low, high)

        # Ordena os elementos presentes antes da partição (menores que o pivô)
        # e depois (maiores que o pivô)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)

# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados


def partition(array, low, high):
    # índice do menor elemento
    index_low = low - 1
    # o pivô será escolhido
    # através do índice que divide o array
    pivot = array[high]

    for curr_index in range(low, high):
        # se o elemento corrente é menor ou igual ao pivô
        if array[curr_index] <= pivot:
            # incrementa o índice do menor elemento
            index_low += 1
            array[index_low], array[curr_index] = array[curr_index], array[index_low]
    array[index_low + 1], array[high] = array[high], array[index_low + 1]

    return index_low + 1


array = [100, 4, 6, 33, 56, 67]
quicksort(array, 0, len(array) - 1)
print(array)
