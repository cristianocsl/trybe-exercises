"""
Uma função deve identificar o único número duplicado em uma lista.
Esse número deve ser retornado em 0(n)
"""


def find_duplicated(array):
    count = {}
    most_frequent = array[0]

    for item in array:
        if item not in count:
            count[item] = 1
        else:
            count[item] += 1

        if count[item] > count[most_frequent]:
            most_frequent = count[item]

    return most_frequent


entrada = [1, 3, 2, 2, 2, 1]
# saída: 1
print(find_duplicated(entrada))


"""
set.isdisjoint(other) : retorna True se o set não tem nenhum elemento em comum com other , ou seja, se a intersecção é vazia;
set.issubset(other) : verifica se set é um subconjunto de other , ou seja, se todo elemento de set está em other ;
set.issuperset(other): verifica se set é um superconjunto de other , ou seja, se todos os elementos de other estão em set . A diferença de um superconjunto e de um subconjunto é que no superconjunto podem haver outros elementos, além dos elementos de other já presentes dentro de set . Já no subconjunto não;
set == other: verifica se os conjuntos são iguais, ou seja, se todos os elementos de set estão em other e se todos os elementos de other estão em set . Lembre-se que a ordem não importa. Não existe função dedicada para a comparação de igualdade.
"""
