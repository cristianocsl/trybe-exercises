# escrita de arquivos no formt JSON. antes da escrita
# deve-se transformar os dados
import json

# Leitura de todos os pokemons
with open("pokemons.json") as arquivo:
    pokemons = json.load(arquivo)["results"]

# Separamos somente os do tipo 'Grass'
pokemons_grass = [
    elem for elem in pokemons if 'Grass' in elem['type']
]
# Abre o arquivo para escrevermos apenas o pokemons do tipo grama (Grass)
with open('pokemons_grass.json', mode='w') as novo_arq:
    json_to_write = json.dumps(
        pokemons_grass
    )  # conversão de Python para o formato json (str)
    novo_arq.write(json_to_write)

# também é possível escrever em arquivos de forma direta.
with open('new_pokemons_grass.json', mode='w') as novo_arq:
    json.dump(pokemons_grass, novo_arq)
