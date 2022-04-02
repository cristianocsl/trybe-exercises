class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    """
    Este exemplo muda a implementação de _buckets e dos
    outros métodos, que agora vão usar separate chaining
    para o caso de colisões (separate chaining).
    """
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    """
    Para povoar nossa hash, recebemos o objeto, computamos o seu address,
    a partir da chave numérica, e armazenamos no local adequado.
    """
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)
    """
    Para acessar o dado de interesse, passamos a chave. A classe
    identifica o índice, onde a referência para aquele objeto está
    armazenada, e retorna o valor que estiver no campo name .
    """

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    """
    Para consultar se uma determinada chave existe dentro da sua hash map,
    basta calcular o address . Além disso, vamos certificar de que o conteúdo
    da lista buckets não é None .
    """

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_name
        return employee.name


# Exercício 1: c) Instancie a sua classe HashMap e
# use os objetos Employee para povoá-la. Imprima na
# tela o nome da pessoa de id_num = 23 , acessando
# a informação a partir da HashMap .

if __name__ == "__main__":

    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

    hashmap = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        hashmap.insert(employee)

    # print(hashmap.get_value(23))

    print(hashmap.get_value(10))
    hashmap.update_value(10, "name30")
    print(hashmap.get_value(10))


"""
Exercício 2: A pessoa de id_num = 10 está com o
nome errado, deveria ser name30 . Implemente um
método com a assinatura abaixo, onde id_num é a
chave para localizar o registro que queremos
alterar e new_name é o nome a ser colocado.
Verifique se o seu código está realmente alterando
o nome, imprimindo o nome antes e depois da
alteração:

"""
