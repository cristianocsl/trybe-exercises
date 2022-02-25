from abc import ABC, abstractmethod
import gzip
import json
from zipfile import ZipFile


class Compressor(ABC):
    def __init__(self, filepath="./"):
        self.filepath = filepath


""" Nesta classe foi definida uma interface que diz
que qualquer nova classe para compressor deve possuir
o método chamado 'compress' que receba o parâmetro
'file_name'."""


@abstractmethod
def compress(self, file_name):
    raise NotImplementedError


class ZipCompressor(Compressor):
    def compress(self, file_name):
        with ZipFile(file_name + ".zip", "w") as zip_file:
            zip_file.write(file_name)


class GzCompressor(Compressor):
    def compress(self, file_name):
        with open(file_name, "rb") as content:
            with gzip.open(file_name + ".gz", "wb") as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    FILE_EXTENSION = ""
    # Nossa classe agora espera *instâncias* de compressor como um parâmetro.
    # Temos um valor padrão para suportar o código que usava as SalesReport
    # sem parâmetros -- não precisa correr pra re-escrever nada ;)

    def __init__(self, export_file, compressor=GzCompressor):
        self.export_file = export_file
        self.compressor = compressor

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

    def get_export_file_name(self):
        # Aqui usamos o atributo de classe
        # Vai fazer mais sentido nas classes herdeiras!
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        # self.compressor.compress(self.get_export_file_name())
        # # após comentar a linha de cima, deu certo.


class SalesReportJSON(SalesReport):
    # Nós não reimplementamos o get_export_file_name
    # mas como ele usa um atributo de classe pra pegar a extensão
    # só de redefinir o atributo já vamos conseguir mudar o resultado!
    FILE_EXTENSION = ".json"

    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    # implementação aqui
    pass


relatorio_de_compras = SalesReportJSON("meu_relatorio_1")
relatorio_de_vendas = SalesReportJSON("meu_relatorio_2", ZipCompressor)

relatorio_de_compras.compress()
relatorio_de_vendas.compress()
