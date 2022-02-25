reprovados = []
with open("exerc-fix3.txt", mode="r") as arquivo:
    for linha in arquivo:
        inf_estud = linha
        inf_estud = inf_estud.split(" ")  # array ['ana','6']
        if int(inf_estud[1]) < 6:
            reprovados.append(inf_estud[0])

with open("new-exerc-fix3.txt", mode="w") as arq_reprov:
    for linha in reprovados:
        print(linha)
    arq_reprov.writelines(reprovados)
