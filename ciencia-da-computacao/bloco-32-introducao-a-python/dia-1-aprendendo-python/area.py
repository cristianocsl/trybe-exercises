PI = 3.14159


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return round((PI * radius * radius), 2)


if __name__ == '__main__':
    print("Área quadrado: ", square(10))
    print("Área retângulo", rectangle(3, 2))
    print("Área círculo", str(circle(3)).replace('.', ','))
