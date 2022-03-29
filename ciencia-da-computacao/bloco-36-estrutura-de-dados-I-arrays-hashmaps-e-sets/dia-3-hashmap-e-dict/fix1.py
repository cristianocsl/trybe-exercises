class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    """
    Como nossa hash function resulta em endereços de 0 a 9, uma lista com 10
    posições é suficiente. Vamos inicializar a lista já do tamanho que
    precisamos, preenchida com None .
    """
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    """
    Para povoar nossa hash, recebemos o objeto, computamos o seu address,
    a partir da chave numérica, e armazenamos no local adequado.
    """
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
    """
    Para acessar o dado de interesse, passamos a chave. A classe
    identifica o índice, onde a referência para aquele objeto está
    armazenada, e retorna o valor que estiver no campo name .
    """

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    """
    Para consultar se uma determinada chave existe dentro da sua hash map,
    basta calcular o address . Além disso, vamos certificar de que o conteúdo
    da lista buckets não é None .
    """

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None


# Exercício 1: c) Instancie a sua classe HashMap e
# use os objetos Employee para povoá-la. Imprima na
# tela o nome da pessoa de id_num = 23 , acessando
# a informação a partir da HashMap .

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

hashmap = HashMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    hashmap.insert(employee)

print(hashmap.get_value(23))
