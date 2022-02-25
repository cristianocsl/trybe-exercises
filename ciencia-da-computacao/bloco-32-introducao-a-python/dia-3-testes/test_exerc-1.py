from exerc_1 import divisiveis


def test_divisiveis_por_tres_deve_returnar_fizz():
    assert divisiveis(3)[-1] == "Fizz"


def test_divisiveis_por_cinco_deve_returnar_fizz():
    assert divisiveis(5)[-1] == "Buzz"


def test_divisiveis_por_quinze_deve_returnar_fizz():
    assert divisiveis(15)[-1] == "FizzBuzz"
