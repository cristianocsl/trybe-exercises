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
