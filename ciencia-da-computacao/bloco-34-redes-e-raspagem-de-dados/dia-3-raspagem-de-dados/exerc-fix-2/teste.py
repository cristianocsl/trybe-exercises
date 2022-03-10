from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")

selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()

print(href)

print(URL_BASE + href)
