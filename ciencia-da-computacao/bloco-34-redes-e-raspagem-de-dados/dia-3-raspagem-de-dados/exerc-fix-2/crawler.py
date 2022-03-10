import requests
# import time

url = "https://www.cloudflare.com/rate-limit-test/"

# for _ in range(15):
#     response = requests.get(url)
#     print(response.status_code)
#     time.sleep(6)

try:
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
