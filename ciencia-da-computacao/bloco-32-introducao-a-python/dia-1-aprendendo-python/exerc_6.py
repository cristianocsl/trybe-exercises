def triangulo(a, b, c):
    e_triang = a + b > c and b + c > a and a + c > b
    if not e_triang:
        return "não é triângulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b or b == c or c == a:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(triangulo(12, 9, 10))
