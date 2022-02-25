from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    # def __init__(self, lado): # nesse caso, não foi usado o constructo,
    # mas poderia ter sido usado.

    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    """A classe ascendente define que devem existir
    os métodos area e perimetro em todos os herdeiros"""

    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return (self.raio ** 2) * PI

    def perimetro(self):
        return 2 * PI * self.raio


# para testar

quadrado = Quadrado(3)
area = quadrado.area()

print(area)
