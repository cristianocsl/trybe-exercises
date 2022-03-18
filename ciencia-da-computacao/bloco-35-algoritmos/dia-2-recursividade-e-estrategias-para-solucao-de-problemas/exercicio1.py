# na minha solução, o range já começa em 1
# por isso, não é necessário tratar caso com number == 0
def count_pares(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter
