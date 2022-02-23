import json


def busca_pokemon_por_tipo(tipo, arq_pokemons):
    with open(arq_pokemons) as arquivo:
        pokemons = json.load(arquivo)["results"]
        pokemons_por_tipo = [elem for elem in pokemons if tipo in elem["type"]]
        return pokemons_por_tipo
