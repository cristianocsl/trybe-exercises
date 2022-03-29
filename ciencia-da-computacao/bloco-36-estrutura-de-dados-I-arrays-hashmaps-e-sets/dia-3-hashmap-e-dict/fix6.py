"""
Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves
ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu triplo.
Consulte o método keys() e atualize o seu dicionário para a nova regra.
"""

dict_comprehension = {i: i * 2 for i in range(3, 20)}

for key in dict_comprehension.keys():
    if key % 2 != 0:
        dict_comprehension[key] = key * 3


print(dict_comprehension)
