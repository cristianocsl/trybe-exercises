my_file = open("arquivo.txt", mode="w")

my_file.write("sobrenome: Lima\n")
my_file.write("idade: 39 anos\n")

# escrever múltiplas linhas
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
my_file.writelines(LINES)

# redirecionando o conteúdo digitado dentro de print para um arquivo.
print("Profissão: DEV", file=my_file)

my_file.close()
