import random

random_num = random.randint(1, 10)
guess = ""

while guess != random_num:
    guess = int(input("Qual o seu palpite?"))
    # int() converte o str do input em núm

print("O número sorteado era: ", guess)
