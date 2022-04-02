estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']

conj1 = set(lista1_entregues)
conj2 = set(lista2_entregues)
estud = set(estudantes)


ask_1 = 'Quem ainda não entregou a lista 1?'
do_not_do_list_1 = estud.difference(conj1)
print(ask_1, do_not_do_list_1)


ask_2 = 'Quem já entregou as duas listas?'
done_both = conj1.intersection(conj2)
print(ask_2, done_both)


ask_3 = 'Quem já entregou qualquer uma das duas listas?'
done_one = estud.intersection(conj1)
done_tow = estud.intersection(conj2)
done_both = done_one.union(done_tow)
print(ask_3, done_both)


ask_4 = 'Quem ainda não entregou nenhuma das listas?'
union_lists = conj1.union(conj2)
done_nothing = estud.difference(union_lists)
print(ask_4, done_nothing)
