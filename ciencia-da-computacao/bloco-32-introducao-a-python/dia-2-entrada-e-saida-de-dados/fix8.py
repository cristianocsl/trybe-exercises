# escrita
file = open("arquivo.dat", mode="wb")  # write bytes
file.write(b"C\xc3\xa1ssio 30")
file.close

# leitura
file = open("arquivo.dat", mode="rb")  # read bytes
content = file.read()
print(content)
file.close()
