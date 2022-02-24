from abc import ABC, abstractmethod
from 
import gzip
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!
        No contexto de Programação Orientada a Objetos,
        pense que coisas abstratas são coisas criadas
        para serem especializadas por classes herdeiras!"""
        return [
            {  # este dicionário compõem uma linha
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

    """O comportamento de compressão foi adicionado à classe
    ascendente, e não à classe herdeira, pois todos os relatório
    terão que ser comprimidos. Como isso não é um comportamento
    especializado, foi colocado na classe ascendente."""
    def compress(self):
        binary_content = json.dumps(self.build()).encode("utf-8")

        with gzip.open(self.export_file + ".gz", "wb") as compressed_file:
            compressed_file.write(binary_content)

    """A classe SalesReport define o método serialize para
    deixar nítido que todo relatório de vendas deve ter
    uma forma de se serializar, mas ela mesma, por ser
    geral, não é serializável."""

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + ".csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# para testar:
relatorio_de_vendas = SalesReportJSON("novo_relatorio")
print(relatorio_de_vendas.get_length())

relatorio_de_compras = SalesReportCSV("novo_relatorio")
print(relatorio_de_compras.get_length())
