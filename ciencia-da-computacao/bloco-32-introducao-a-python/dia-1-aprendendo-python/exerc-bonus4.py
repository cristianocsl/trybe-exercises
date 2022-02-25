def combustivel(LA, LG):  # minha resolução: recebe dois tipos
    if LA <= 20:
        val_alc = 1.9 * LA * (1 - 0.03)
    elif LA > 20:
        val_alc = 1.9 * LA * (1 - 0.05)
    if LG <= 20:
        val_gas = 2.5 * LA * (1 - 0.04)
    elif LG > 20:
        val_gas = 2.5 * LA * (1 - 0.06)
    return val_alc + val_gas


print(combustivel(5, 8))


def combustivel_gab(tipo, litros):  # recebe um tipo
    if tipo == 'A':
        preco = 1.90
        desconto = (1 - 0.03)
        if litros > 20:
            desconto = (1 - 0.05)
    elif tipo == 'G':
        preco = 2.50
        desconto = (1 - 0.04)
        if litros > 20:
            desconto = (1 - 0.06)
    return preco * litros * desconto


print(combustivel_gab('A', 1))
