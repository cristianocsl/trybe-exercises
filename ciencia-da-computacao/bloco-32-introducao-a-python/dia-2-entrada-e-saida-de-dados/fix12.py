import json

with open("pokemons.json") as arquivo:
    content = arquivo.read()
    pokemons = json.loads(content)["results"]
# o conteúdo é transformado em
# estrutura python equivalente, dicionário neste caso.
# acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])

# loads carrega o JSON a partir de um texto
# load carrega o JSON a partir de um arquivo.

with open("pokemons.json") as arquivo:
    pokemons = json.load(arquivo)["results"]
print(pokemons[0])
