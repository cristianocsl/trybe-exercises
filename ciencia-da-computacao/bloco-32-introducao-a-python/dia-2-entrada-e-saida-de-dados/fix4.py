import sys

err = "Arquivo não encontrado"

print(f"Um Erro aconteceu: {err}", file=sys.stderr)
#  Existe um parâmetro que nos permite modificar
#  a saída padrão para a saída de erros:
