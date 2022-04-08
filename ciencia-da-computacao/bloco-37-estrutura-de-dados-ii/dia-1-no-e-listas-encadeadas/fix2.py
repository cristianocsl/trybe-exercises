from platform import node
from dobble_node import DobbleNode


class DobbleLinkedList:
    def __init__(self):
        self.head = DobbleNode('HEAD')
        self.tail = DobbleNode('TAIL')
        self.head.next = self.tail
        self.tail.previous = self.head
        self.__length = 0

    def __str__(self):
        return f"DobbleLinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        node_value = DobbleNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DobbleNode(value)
        node_value.previous = self.tail.previous
        node_value.next = self.tail
        node_value.previous.next = node_value
        self.tail.previous = node_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        new_node = DobbleNode(value)
        position_node = self.__get_node_at(position)
        new_node.next = position_node
        new_node.previous = position_node.previous
        new_node.previous.next = new_node
        position_node.previous = new_node
        self.__length += 1
