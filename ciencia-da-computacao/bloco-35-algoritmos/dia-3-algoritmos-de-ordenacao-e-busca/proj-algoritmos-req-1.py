"""
Seu trabalho é descobrir qual o melhor horário
para disponibilizar os conteúdos. Para achar o
horário, será utilizada força bruta. Ou seja, para
achar o melhor horário, a função que você
desenvolver será chamada várias vezes com valores
diferentes para a variável target_time, e serão
analisados os retornos da função.

Dica: Quando vou saber qual o melhor horário?
Quando o contador retornado pela função for o maior.

"""


def count_bigger_period(permanence_period, target_time):
    counter = 0
    for item in permanence_period:
        if item[0] <= target_time <= item[1]:
            counter += 1
        # 2a opção:
        # if target_time in range(item[0], item[1] + 1):
        #     counter += 1
    return counter


permanence_period = [(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5)]


print(count_bigger_period(permanence_period, 5))