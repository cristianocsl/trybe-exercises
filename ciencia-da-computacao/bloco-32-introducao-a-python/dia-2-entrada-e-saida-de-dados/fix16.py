# leitor e escritor baseado em dicionários.
# principal vantagem: com ele, não precisamos manipular
# os índices para acessar os dados das colunas.
# Mas, devido a estrutura de dados utilizada, ele
# tem como desvantagem o espaço ocupado em memória, sendo maior que o comum:
import csv

with open("balneabilidade.csv") as arquivo:
    praia_status_leitor = csv.DictReader(arquivo, delimiter=",", quotechar='"')
    # a linha de cabeçaçhos é utilizada como chave do dicionário
    # agrupa campanhas e suas respectivas balneabilidades
    categoria_por_campanha = {}
    for linha in praia_status_leitor:
        numero_boletim = linha["numero_boletim"]
        categoria = linha["categoria"]
        if numero_boletim not in categoria_por_campanha:
            categoria_por_campanha[numero_boletim] = {
                "Própria": 0,
                "Imprópria": 0,
                "Muito Boa": 0,
                "Indisponível": 0,
                "Satisfatória": 0,
            }
        categoria_por_campanha[numero_boletim][categoria] += 1
    # abre um arquivo para escrita
    with open("report_por_campanha_dicionarios.csv", mode="w") as arquivo:
        # os valores a serem escritos devem ser dicionários
        header = [
            "Campanha",
            "Própria",
            "Imprópria",
            "Muito Boa",
            "Indisponível",
            "Satisfatória",
        ]
        # É necessário passar o arquivo e o cabeçalho
        writer = csv.DictWriter(arquivo, fieldnames=header)
        # print('writer', writer.items())
        # escreve as linhas de dados
        for numero_boletim, categoria in categoria_por_campanha.items():
            # desempacota os valores de balneabilidade para formar uma linha
            # equivalente a
            # row = {"campanha": campaign}
            # for name, value in bathing.items():
            #     row[name] = value
            linha = {"Campanha": numero_boletim, **categoria}
            writer.writerow(linha)
            # print(campanha)
