# import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


array = Array()
# array.set(0, 'Marcos')
# array.set(1, 'Patrícia')
# # sys.getsizeof retorna o tamanho da lista em bytes
# array_memory_size = sys.getsizeof(array.data)

# print(array_memory_size)

# array.set(2, "Matheus")
# array.set(3, "Giovana")
# # como um espaço adicional é reservado o valor não é modificado
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size)  # 88
# array.set(4, "Alberto")
# array.set(5, "Marta")
# array.set(6, "Túlio")
# array.set(7, "Michelle")
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size) # 120

array.set(0, "Marcos")
array.set(1, "Patrícia")
# print(array), internamente chama o método array.__str__() que implementamos
print(array)  # saída: ["Marcos", "Patrícia"]

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(array)  # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']
