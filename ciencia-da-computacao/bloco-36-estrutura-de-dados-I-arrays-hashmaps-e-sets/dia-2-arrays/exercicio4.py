"""
Exercício 4 Dado dois arrays de números inteiros que representam instantes de
entrada e saídas em uma biblioteca e um número que represente um instante a
ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele
instante. Considere que todo estudante que entrou, saiu da biblioteca.
"""


def checkin_checkout(entradas, saidas, tempo):
    counter = 0
    index = 0
    for entrada in entradas:
        if entrada <= tempo <= saidas[index]:
            counter += 1
        index += 1
    return counter
