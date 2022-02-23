import json


class SalesReport():  # entidade SalesReporter
    def __init__(self, export_file):  # o método construtor __init__ cria e ...
        # ...retorna um objeto.
        self.export_file = export_file + ".json"

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {
                "Coluna 1": "Dado 1",
                "Coluna 2": "Dado 2",
                "Coluna 3": "Dado 3",
            },
            {
                "Coluna 1": "Dado A",
                "Coluna 2": "Dado B",
                "Coluna 3": "Dado C",
            },
        ]

    def serialize(self):
        # aqui será gerado o relatório em JSON
        with open(self.export_file, mode="w") as file:
            json.dump(self.build(), file)


meu_relatorio_de_vendas = SalesReport('meu_relatorio')

meu_relatorio_de_vendas.serialize()
