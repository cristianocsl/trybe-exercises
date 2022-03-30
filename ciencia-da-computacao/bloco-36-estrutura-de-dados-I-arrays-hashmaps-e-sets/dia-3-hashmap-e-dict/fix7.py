"""
Encontre o n° mais frequente. Se houver empate, retorna qualquer um.
"""
nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
# resposta: 3


def check_frequency(nums):
    frequency = {}
    most_frequent = nums[0]

    for number in nums:
        if number in frequency:
            frequency[number] += 1
        else:
            frequency[number] = 1
        if frequency[number] > frequency[most_frequent]:
            most_frequent = number
    return most_frequent
