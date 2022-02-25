from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError  # quando usar abstractmethod, levanta erro
    """todas as classe devem ter o método log, que recebe uma
    classe e um parâmetro"""


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open("log.txt", "a") as arquivo:
            print(msg, file=arquivo)  # não entendi o file=arquivo


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:  # conjunto de manipuladores do gerenciamento de logs
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERT", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"
