import random

lista = ["bola", "sapo", "rato"]
MAX_TENTAT = 3


def embaralha_palav_secr(lista_palavras):
    palavra_secr = random.choice(
        lista_palavras   # palavra secreta do array lista
    )
    palavra_embaralhada = "".join(
        random.sample(
            palavra_secr, len(palavra_secr)
        )
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
    pal_secret, palavra_embaralhada = embaralha_palav_secr(lista)
    print(f"A palavra embaralhada é '{palavra_embaralhada}'")
    chutes = mostra_chutes()
    checa_result_jogo(pal_secret, chutes)
