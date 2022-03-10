from parsel import Selector
import requests

# URL_BASE = "http://books.toscrape.com/catalogue/"

# response = requests.get(URL_BASE + "page-1.html")

# selector = Selector(text=response.text)

# href = selector.css(".product_pod h3 a::attr(href)").get()

# print(href)

# print(URL_BASE + href)

"""
Agora, para utilizar a expressão regular que fizemos, podemos substituir o
método getall pelo método re , ou o método get por re_first . Ambos, além de
 recuperar valores, aplicarão a expressão regular sobre aquele valor.

 Essa expressão regular pode ser feita da seguinte forma: £\d+\.\d{2} .

 podemos substituir o método getall pelo método re , ou o método get
 por re_first.Ambos, além de recuperar valores, aplicarão a expressão regular
 sobre aquele valor.
 """

# URL_BASE2 = "http://books.toscrape.com/"

# response = requests.get(URL_BASE2)

# selector = Selector(text=response.text)

# prices = selector.css(".product_pod .price_color::text").re(r"£\d+\.\d{2}")

# print(prices)

URL_BASE3 = "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"

response = requests.get(URL_BASE3)

selector = Selector(text=response.text)

description = selector.css("#product_description ~ p::text").get()

# print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

# remove sufixo: str[:-len('sufixo')]
# é o mesmo que str.removesuffix('sufixo')
# remove prefixo: str[len('sufixo'):]
# é o mesmo que str.removeprefix('sufixo')

print(description)
