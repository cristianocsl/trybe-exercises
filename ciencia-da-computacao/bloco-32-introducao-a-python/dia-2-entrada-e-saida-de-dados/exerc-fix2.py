valores = input("Entre com valores separados por espaços: ")

arr_num = valores.split(" ")

sum = 0

for num in arr_num:
    if not num.isdigit():
        print(f"Erro ao somar valores, '{num}' não é um dígito.")
    else:
        sum += int(num)


print(f"A soma dos valores válidos é: {sum}")
