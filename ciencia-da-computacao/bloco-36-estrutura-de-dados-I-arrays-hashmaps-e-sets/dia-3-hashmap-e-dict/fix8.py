"""
separe as palavras de acordo com a sua letra inicial
"""

text = [
    "ana",
    "ama",
    "joao",
    "que",
    "ama",
    "jose",
    "mas",
    "jose",
    "nao",
    "ama",
    "ana",
]

# resposta:
# 'a': ['ana', 'ama', 'ama', 'ama', 'ana']
# 'j': ['joao', 'jose', 'jose']
# 'q': ['que']
# 'm': ['mas']
# 'n': ['nao']


def group_words(text):
    dict_words = {}
    for word in text:
        first_char = word[0]
        if first_char not in dict_words:
            dict_words[first_char] = [word]
        else:
            dict_words[first_char].append(first_char)
    array = [f"{key}: {value} \n" for key, value in dict_words.items()]

    return "".join(array)


print(group_words(text))
