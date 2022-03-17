def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


def reverse(array):
    if len(array) <= 1:
        return array

    return [array[-1]] + reverse(array[:len(array) - 1])

# simulando array com 3 elementos:
# array = [ 3, 2, 1 ]


# primeira passagem
def reverse(array):  # [ 3, 2, 1 ]
    if len(array) <= 1:  # a condição de parada é uma espécie de await.
        # O retorno de tudo só virá após ter sido satisfeita a condição.
        return array

    return (
        [array[-1]] +                       # [ 1 ] +
        reverse(array[:len(array) - 1])     # reverse([ 3, 2 ]) ??
    )


# segunda passagem
def reverse(array):  # [ 3, 2 ]
    if len(array) <= 1:
        return array

    return (
        [array[-1]] +                       # [ 2 ] +
        reverse(array[:len(array) - 1])     # reverse([ 3 ]) ??
    )


# terceira passagem
def reverse(array):  # [ 3 ]
# agora que o array tem tamanho 1, o retorno vai começar a acontecer
    if len(array) <= 1:
        return array

    return (
        [array[-1]] +                       # [ 3 ] +
        reverse(array[:len(array) - 1])     # reverse([ ]) ??
    )

# esquema do retorno acontecendo seguindo a ordem da pilha

# [3]               - returno da terceira passagem
# [2] + [3]         - returno da segunda passagem
# [1] + [2] + [3]   - returno da primeira passagem
