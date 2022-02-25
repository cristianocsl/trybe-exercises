from operator import attrgetter


class Quarto:
    def __init__(
        self, numero, andar, quantidade_de_hospedes, preco, reservado
    ):
        self.numero = numero
        self.andar = andar
        self.quantidade_de_hospedes = quantidade_de_hospedes
        self.preco = preco
        self.reservado = False  # sempre inicia falso. Representa o estado.


class Hospede:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf


class Reserva:
    def __init__(self, quarto, hospede):
        self.quarto = quarto
        self.hospede = hospede


class Hotel:
    def __init__(self, nome, quartos, reservas):
        self.nome = nome
        self.quartos = quartos
        self.reservas = reservas

    """check_in - recebe uma quantidade indefinida de hospedes e busca por um
    quarto disponível com capacidade suficiente. Se houver um quarto
    disponível, altera o estado do quarto e cria uma reserva para cada hospede.
    Caso não haja quartos disponíveis deve lançar a exceção IndexError com a
    mensagem "Não há quartos disponíveis para essa quantidade de hospedes"""

    def check_in(self, *hospedes):  # recebe uma quantidade
        # indefinida de hospedes
        try:
            quarto = self.quartos_disponiveis(len(hospedes))[0]
        except (IndexError):
            raise IndexError(
                "Não há quartos disponíveis para essa quantidade de hóspedes."
            )
        else:
            quarto.reservado = True
            for hospede in hospedes:
                self.reservas.append(
                    Reserva(quarto, hospede)
                )

    def check_out(self, quarto):
        quarto.reservado = False
        self.reservas = [
            reserva
            for reserva in self.reservas
            if reserva.quarto != quarto
        ]

    def quartos_disponiveis(self, quantidade_de_hospedes):
        return sorted(
            [
                quarto
                for quarto in self.quartos
                if not quarto.reservado and
                quantidade_de_hospedes <= quarto.quatidade_de_hospedes
            ],
            key=attrgetter("quantidade_de_hospedes")
        )
