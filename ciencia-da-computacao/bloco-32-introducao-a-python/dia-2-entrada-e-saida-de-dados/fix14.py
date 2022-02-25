import csv

with open("balneabilidade.csv") as arquivo:
    praia_status_leitor = csv.reader(arquivo, delimiter=",", quotechar='"')
    header, *data = praia_status_leitor

# print(data)

# entendermos melhor como o desempacotamento de valores funciona:
a, *b = "abc"

print(f"a: {a}")
print(f"b: {b}")
# print(f"c: {c}")

head, *tail = [1, 2, 3]
# Quando um * está presente no desempacotamento,
# os valores são desempacotados em formato de lista.
# print('head', head)
# print('tail', tail)
