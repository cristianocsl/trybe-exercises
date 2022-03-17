def fatorial(n):
    if n <= 1:
        return 1
    else:
        return n * fatorial(n - 1)


def somatorio(n):
    if n == 1:
        return n
    else:
        return n + somatorio(n - 1)
