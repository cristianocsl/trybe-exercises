def valor(area):
    preco_lata = 80  # reais
    litros_requeridos = area / 3
    print('litros_requeridos', litros_requeridos)
    latas_requeridas = litros_requeridos // 20
    print('latas_requeridas', latas_requeridas)
    if litros_requeridos % 20:
        latas_requeridas += 1
    return latas_requeridas, latas_requeridas * preco_lata


print(valor(200))
