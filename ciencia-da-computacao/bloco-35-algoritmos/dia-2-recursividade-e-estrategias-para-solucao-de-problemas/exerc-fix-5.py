# função iterativa de contagem regressiva.


def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM")

    return n


iterative_countdown(5)

# código iterativo de cálculo de fatorial:


def iterative_factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact = fact * i
    return fact
