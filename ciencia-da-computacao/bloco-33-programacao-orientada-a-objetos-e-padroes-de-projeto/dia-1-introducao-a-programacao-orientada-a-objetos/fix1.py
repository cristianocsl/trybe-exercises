# O que é a nossa entidade User?
# É alguém que quer recuperar uma senha por email.


class User:  # class: é usada para definir entidades. (definir != criar)
    # forma geral de definir entidades
    # entidade é o mesmo que classe
    def __init__(self, name, email, password):
        self.name = name  # atributo
        self.email = email  # atributo
        self.password = password  # atributo

    # função que representa a ação de enviar email

    def reset_password(self):  # método
        print('Envia email de reset de senha')


# a variável meu_user conterá uma entidade/objeto

meu_user = User("Cristiano Seabra", "cristiano@gmail.com", "riolargo12")
meu_user.reset_password()

print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

# Para invocar o método construtor, a sintaxe é
# NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
