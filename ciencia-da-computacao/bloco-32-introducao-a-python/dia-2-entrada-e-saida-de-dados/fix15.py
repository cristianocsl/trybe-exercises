# Podemos fazer uma análise agrupando a balneabilidade
# por campanha e depois salvamos o resultado também no formato csv:
import csv

# lê os dados
with open("balneabilidade.csv") as arquivo:
    praia_status_leitor = csv.reader(arquivo, delimiter=",", quotechar='"')
    cabeçalho, *dados = praia_status_leitor

# agrupa campanhas e suas respectivas balneabilidades
categoria_por_campanha = {}

for linha in dados:
    numero_boletim = linha[6]
    categoria = linha[2]
    if numero_boletim not in categoria_por_campanha:
        categoria_por_campanha[numero_boletim] = {
            "Própria": 0,
            "Imprópria": 0,
            "Muito Boa": 0,
            "Indisponível": 0,
            "Satisfatória": 0,
        }
    categoria_por_campanha[numero_boletim][categoria] += 1

# escreve o relatório em csv
# abre um arquivo para escrita
with open("report_por_campanha.csv", mode="w") as report:
    writer = csv.writer(report)

    # escreve o cabeçalho
    cabecalho = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]

    writer.writerow(cabecalho)
    # escreve as linhas de dados
    for numero_boletim, categoria in categoria_por_campanha.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = [campaign]
        # for value in bathing.values():
        #     row.append(value)
        row = [numero_boletim, *categoria.values()]
        writer.writerow(row)
