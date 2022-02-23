# def mean(numbers):
#     total = 0
#     for number in numbers:
#         total += number
#         return total / len(numbers)
# #desse jeito o return está dentro do escopo do for


def average(values):
    total = 0
    for index in values:
        total += index
    return total / len(values)


# print(mean([20, 20, 20]))
print(average([20, 20, 20]))
