import requests
import json

with open("cookies_2_2.txt", 'r', encoding='utf8') as file:
    cookies_list = file.readlines()

# session = requests.Session() # 不要一个session装载多个账号信息
for cookie_str in cookies_list:
    cookie_dict = json.loads(cookie_str)
    session = requests.Session()
    session.cookies = requests.utils.cookiejar_from_dict(cookie_dict)
    response = session.get("http://shanzhi.spbeen.com/index/")
    print(response, response.text)