try:
    arquivo = open("arquivo.txt", mode="r")
    # arquivo = open("arquivo.txt", mode="w")
    # no modo 'write' o arquivo será criado mesmo se inexistente,
    # executando as cláusulas else e finally
except OSError:  # “file not found” or “disk full”
    print("arquivo inexistente")
else:
    print('arquivo manipulado e fechado com sucesso')
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print('Tentativa de abrir arquivo')
