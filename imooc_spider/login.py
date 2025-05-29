import requests
from lxml import etree
from login_crypto import encrypto
from python_js_encrypto import js_encrypto

url = 'http://shanzhi.spbeen.com/login/'
headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "Cookie":"csrftoken=Z12KNFbX5JQpMI6GmnghL4SHVxydpTFZW6PnmQNBy2wqIzGX5NKVHetY47tVHMFr;",
}

get_response = requests.get(url, headers=headers)
html = etree.HTML(get_response.text)
pk = html.xpath('.//input[@id="pk"]/@value')[0]
token = html.xpath('.//input[@name="csrfmiddlewaretoken"]/@value')[0]

print("公钥", pk)

username = "demo1111"
password = "demo1111"

# miwen_password = encrypto(pk, password)
miwen_password = js_encrypto(pk, password)
print("密码：", password, "\n加密后：", miwen_password)
 
formdata = {
    "username": username,
    "password": miwen_password,
    "csrfmiddlewaretoken": token,
}
print(formdata)

post_response = requests.post(url, data=formdata, headers=headers)

print(post_response, post_response.text)

if post_response.status_code >= 400:
    with open('error.html', 'wb') as file:
        file.write(post_response.content)

