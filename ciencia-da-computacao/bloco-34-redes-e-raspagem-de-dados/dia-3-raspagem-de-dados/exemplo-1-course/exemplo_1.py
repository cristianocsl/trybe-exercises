import requests


url = "https://frontend-todolist-cris.herokuapp.com/login"
response = requests.get(url)
# response = requests.post(url, data={  # não deu certo. retornou status 405
#     "email": "cslcristiano@email.com",
#     "senha": "shalom"
#     })

# print("response.status_code ->", response.status_code)
# print("response.headers ->", response.headers)
# print("response.headers[Last-Modified] ->", response.headers["Last-Modified"])
# print("response.headers[Content-Type] ->", response.headers["Content-Type"])
# print("response.text ->", response.text)
# print("response.content ->", response.content)

# url2 = "http://httpbin.org/post"

# response2 = requests.post(url2, data="email")

# print(response2.text)

# url3 = "http://httpbin.org/get"

# response3 = requests.get(url3, headers={
#     "Accept": "application/json"
# })

# print(response3.content)
# print(response3.text)
# print(response3.json())

# Requisição a recurso binário
# response = requests.get("http://httpbin.org/image/png")
# print(response.content)

# Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()

# class Example1:
#     def execute(self):
#         result = requests.get(url)

#         print("result", result)
#         print("result.status_code", result.status_code)
#         print("result.headers", result.headers)
#         print("result.headers[Content-Type]", result.headers["Content-Type"])
