# Um arquivo é também um iterável, ou seja,
#  pode ser percorrido em um laço de repetição.
file = open('arquivo.txt', mode='r')

for linha in file:
    print(linha)
file.close()
