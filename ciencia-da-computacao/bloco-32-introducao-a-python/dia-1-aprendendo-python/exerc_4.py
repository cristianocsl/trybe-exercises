nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(nomes):
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maior_nome(nomes))
