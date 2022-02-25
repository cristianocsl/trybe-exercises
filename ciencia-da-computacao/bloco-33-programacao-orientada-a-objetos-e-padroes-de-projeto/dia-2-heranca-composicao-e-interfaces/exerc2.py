from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2  # barras duplas indicam que a divisão
        # só mostrará quociente inteiro. Este cálculo é para encontrar
        # o valor central, que é o índex.
        if len(numbers) % 2 == 0:  # se a qtd de números for par...
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number
