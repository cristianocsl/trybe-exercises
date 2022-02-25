def is_odd(number):
    "Retorna True se um número é ímpar, senão, retorna False."
    return number % 2 != 0


def divide(a, b):
    "Retorna a divisão de a por b"
    return a / b


orders = [
    {"customer": "maria", "order": "pizza", "day": "terça-feira"},
    {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
    {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
    {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
]


def get_order_frequency_per_costumer(orders, customer, food):
    select_customer = []
    for item in orders:
        if item["customer"] == customer:
            select_customer.append(item)

    freq = 0
    for item in select_customer:
        print(item["order"])
        if item["order"] == food:
            freq += 1
    return freq


# get_most_ordered_dish_per_costumer("joao")
