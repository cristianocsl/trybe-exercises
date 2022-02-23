import random

MAX_TENTAT = 3

# método strip():
# removes any spaces or specified characters at the
# start and end of a string. strip() returns a new
# string without the characters you have specified to remove.


def recupera_palavras(file):
    return [word.strip() for word in file]


def embaralha_palav_secr(lista_palavras):
    palavra_secr = random.choice(
        lista_palavras  # palavra secreta do array lista
    )
    palavra_embaralhada = "".join(
        random.sample(palavra_secr, len(palavra_secr))
    )
    return palavra_secr, palavra_embaralhada


def mostra_chutes():
    chutes = []
    for tentativa in range(MAX_TENTAT):
        chute = input("Adivine a palavra: ")
        chutes.append(chute)
    return chutes


def checa_result_jogo(pal_secret, chutes):
    if pal_secret in chutes:
        print(f"Você ganhou: {pal_secret}")
    else:
        print(f"Você perdeu: {pal_secret}")


if __name__ == "__main__":
    with open("palavras_sorteio.txt") as arquivo:
        palavras = recupera_palavras(arquivo)

    pal_secret, palavra_embaralhada = embaralha_palav_secr(palavras)

    print(f"A palavra embaralhada é '{palavra_embaralhada}'")

    chutes = mostra_chutes()

    checa_result_jogo(pal_secret, chutes)
