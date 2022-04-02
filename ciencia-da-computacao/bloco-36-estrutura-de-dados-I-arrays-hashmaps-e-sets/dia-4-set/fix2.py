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
