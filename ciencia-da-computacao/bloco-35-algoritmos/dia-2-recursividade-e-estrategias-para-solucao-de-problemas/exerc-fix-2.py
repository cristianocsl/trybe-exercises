# Faça uma função que retorne o enésimo número da sequência de Fibonacci.

# forma iterativa da sequência de fibonacci
# Na forma iterativa, calculamos todos os
# números da sequência até o número desejado.


def fibonacci(n):
    array = [0, 1]
    for x in range(2, n + 1):
        next = array[-1] + array[-2]
        array.append(next)

    return array[-1]

# Na forma recursiva, definimos o caso trivial
#  ou condição de parada como os dois primeiros
#  números, cuja posição na lista por acaso é
#  igual à seu valor. Em seguida, definimos a
#  lógica recursiva: Um número é igual à soma dos
#  dois numeros que o precedem na sequência.

# Obs.: não está retornando a mesma coisa que a função anterior


def fibonacci_2(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
