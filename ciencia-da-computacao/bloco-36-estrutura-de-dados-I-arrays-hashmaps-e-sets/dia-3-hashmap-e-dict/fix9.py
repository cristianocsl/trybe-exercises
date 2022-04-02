"""
Quais elementos da lista A também ocorrem na lista B?
"""
listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]
# resposta: [4, 5, 6]
# criar um hashmap com complexidade O(n + m)


def intersection(listaA, listaB):
    # criar dict da listaA
    hash_lista_a = {}
    for value in listaA:
        if value not in hash_lista_a:
            # popular com booleanos é menos custoso para memória
            hash_lista_a[value] = True
    # conferir com a listaB
    list_intersection = [
        value for value in listaB if value in hash_lista_a
    ]

    return list_intersection


print(intersection(listaA, listaB))
