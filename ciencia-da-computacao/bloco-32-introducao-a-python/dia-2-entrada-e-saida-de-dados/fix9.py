#  tratamento de exceções
while True:
    try:
        x = int(input("Entre com um número: "))
        break
    except ValueError:
        print("Ops! Isso não é um número válido")
