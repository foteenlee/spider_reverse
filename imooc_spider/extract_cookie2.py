import json
import requests
from lxml import etree
from login_crypto import encrypto
from python_js_encrypto import js_encrypto


users = [
    {"username":"demo1111", "password":"demo1111"},
    {"username":"demo2222", "password":"demo2222"},
    {"username":"demo3333", "password":"demo3333"},
    {"username":"demo4444", "password":"demo4444"},
]

def main(username, password):
    url = 'http://shanzhi.spbeen.com/login/'
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    }
    session = requests.Session()
    get_response = session.get(url, headers=headers)
    html = etree.HTML(get_response.text)
    pk = html.xpath('.//input[@id="pk"]/@value')
    pk = pk[0]
    token = html.xpath('.//input[@name="csrfmiddlewaretoken"]/@value')
    token = token[0]
    print("公钥:", pk)
    miwen_password = encrypto(pk, password)
    formdata = {
        'username': username,
        'password': miwen_password,
        'csrfmiddlewaretoken': token,
    }
    post_response = session.post(url, headers=headers, data=formdata)
    print(post_response, post_response.text)
    # cookies_dict = session.cookies.get_dict()
    cookies_dict = requests.utils.dict_from_cookiejar(session.cookies)
    cookies_str = json.dumps(cookies_dict)
    with open("cookies_2_2.txt", 'a', encoding='utf8') as file:
        file.write(cookies_str)
        file.write('\n')

    if post_response.status_code >= 400:
        with open('error.html', 'wb') as file:
            file.write(post_response.content)

if __name__ == "__main__":
    for user in users:
        username = user['username']
        password = user['password']
        main(username,password)