import json
from unittest.mock import mock_open, patch
from pokemon import busca_pokemon_por_tipo


def test_busca_pokemon_por_tipo():
    # definimos um pokemon do tipo grama
    pokemon_tipo_grama = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
    # definimos também um pokemon do tipo água
    pokemon_tipo_agua = {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }
    conteudo_pokemon_json = json.dumps(
        {"results": [pokemon_tipo_grama, pokemon_tipo_agua]}
    )
    # substituímos a função padrão do python open por mock_open
    # uma versão que se comporta de forma parecida, porém simulada
    with patch("builtins.open", mock_open(read_data=conteudo_pokemon_json)):
        # repare que o nome do arquivo não é importante aqui
        # a esses parâmetros não utilizados damos o nome de dummies
        # como neste contexto alteramos o open pelo mock_open,
        # o argumento "dummy" poderia ser substituído por qualquer
        # coisa, já que não será utilizado pela função
        assert busca_pokemon_por_tipo("Grass", "dummy") == [pokemon_tipo_grama]
