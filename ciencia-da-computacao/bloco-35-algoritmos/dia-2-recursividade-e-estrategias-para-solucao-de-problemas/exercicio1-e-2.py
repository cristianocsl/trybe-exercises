# na minha solução, o range já começa em 1
# por isso, não é necessário tratar caso com number == 0
def count_pares(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter


# o mesmo algoritmo sendo recursivo
def recursive_par(num):
    if num == 1:
        return 0
    elif num % 2 == 0:
        return 1 + recursive_par(num - 1)
    else:
        return recursive_par(num - 1)
