''' ESCADA DE ASTERISCO
Crie uma função recursiva que receba o número de
degraus da escada de asteriscos como parâmetro e
 printe a escada. Exemplo:
 asterisk_stair(3)
 *
 **
 ***
'''


def asterisk_stair(n):
    if n == 1:
        print('*')
        return None
    asterisk_stair(n - 1)
    print(n * '*')


print(asterisk_stair(5))
