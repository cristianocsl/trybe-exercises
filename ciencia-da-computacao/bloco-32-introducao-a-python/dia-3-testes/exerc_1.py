# Exercício 1: Escreva um programa que retorne uma lista
# com os valores numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como
# 'FizzBuzz' ao invés do número';
def gera_array(n):
    return [numero for numero in range(1, n + 1)]


def divisiveis(n):
    lista = []
    if n % 15 == 0:
        lista = gera_array(n)
        for numero in lista:
            if numero % 15 == 0:
                lista[numero - 1] = "FizzBuzz"
    elif n % 5 == 0:
        lista = gera_array(n)
        for numero in lista:
            if numero % 5 == 0:
                lista[numero - 1] = "Buzz"
    elif n % 3 == 0:
        lista = gera_array(n)
        for numero in lista:
            if numero % 3 == 0:
                lista[numero - 1] = "Fizz"
    else:
        lista = gera_array(n)
    return lista
