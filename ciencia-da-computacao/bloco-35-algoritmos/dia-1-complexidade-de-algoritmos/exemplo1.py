import time


def multiple_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        # print(f'Array 1: {number1}')
        for number2 in array2:
            # print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')

    print(time.time())  # retorna o tempo gasto para executar o código
    return result


# meu_array = [1, 2, 3, 4, 5]

meu_array = list(range(0, 10))

multiple_arrays(meu_array, meu_array)
