def vertical_escada_invert(palavra):
    tam_palavra = len(palavra)
    for posicao in range(tam_palavra):
        tam_restante = tam_palavra - posicao
        for posicao in range(tam_restante):
            print(palavra[posicao], end="")  # end="" imprime na horizontal
        print()


if __name__ == '__main__':
    palavra = input('Digite uma palavra: ')
vertical_escada_invert(palavra)
