class Queue:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None
        value = self._data[0]  # -1 é o último elemento da pilha
        del self._data[0]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[0]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for index in range(self.size()):
            value = self._data[index]
            str_items += str(value)
            if index + 1 < self.size():
                str_items += ', '
        return "Queue(" + str_items + ")"


if __name__ == '__main__':
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Queue()

    for elem in elements:
        content_stack.push(elem)

    # saída: Queue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)
    # saída: 10
    print(content_stack.size())

    # saída: 10
    print(content_stack.peek())
    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print(content_stack.pop())

    # saída: 9, pois, após o 10 ter sido removido,
    # o 9 se tornou o elemento do topo da pilha
    print(content_stack.peek())
    # saída: 9
    print(content_stack.size())

    # saída: None, pois a função não retorna nada!
    print(content_stack.clear())
    # saída: 0
    print(content_stack.size())
