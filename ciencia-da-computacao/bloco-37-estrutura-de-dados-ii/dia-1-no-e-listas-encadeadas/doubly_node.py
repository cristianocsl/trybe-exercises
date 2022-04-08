class DoublyNode:
    def __init__(self, value):
        self.value = value
        self.previous = None
        self.next = None

    def __str__(self):
        val = self.value
        prev = self.previous
        return f"DobbleNode(value={val}, previous={prev}, next={self.next})"

    def reset(self):
        self.next = None
        self.previous = None
