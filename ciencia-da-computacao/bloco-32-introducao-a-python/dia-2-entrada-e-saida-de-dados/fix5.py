x = 5
y = 3

print(f"{x} / {y} = { x / y:.2f}")

# antes do = é a representação. após, é o cálculo.
# .3f é a qtd de casas decimais
# .3 é a qtd de caracteres, excluindo o ponto, se houver.
# .3, com/sem 'f', arredenda para mais.

print(f'{x:.^3}')

# saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos
