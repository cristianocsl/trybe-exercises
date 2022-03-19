# Escreva um algoritmo recursivo que identifica se um número é primo.
def temdivisor(num, i, j):
    if i > j:
        return False
    elif num % i == 0:
        return True
    else:
        return temdivisor(num, i + 1, j)


def primo(num):
    return num > 1 and not(temdivisor(num, 2, num - 1))


print(primo(997))
