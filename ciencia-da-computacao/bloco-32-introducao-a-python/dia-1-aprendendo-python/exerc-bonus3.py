def somatorio(n):
    total = 0
    for elem in range(1, n + 1):
        total += elem
    return total


def summation(n):
    return sum(range(1, n + 1))


print(somatorio(5))
print(summation(5))
