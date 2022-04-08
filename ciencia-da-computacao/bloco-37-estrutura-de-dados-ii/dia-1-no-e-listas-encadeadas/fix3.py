from node import Node
from rich import print
"""Código para otimização de inserção (no final) da classe LinkedList.
A complexidade atual, O(n), será substituída por complexidade O(1).
Isso será feito a partir de uma nova classe que recebera a refatoração.
A propriedade 'tail' é a responsável por essa mudança.
"""


class LinkedListGuard():
    def __init__(self):
        self.head = Node('HEAD')
        self.tail = self.head
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next

        if self.head.next is None:
            self.tail = first_value

        self.head.next = first_value
        self.__length += 1

    def insert_last(self, value):
        new_last_value = Node(value)
        self.tail.next = new_last_value
        self.tail = self.tail.next
        self.__length += 1


print()

if __name__ == "__main__":
    my_linked_list = LinkedListGuard()
