


import requests
import execjs



js = execjs.compile(open('43-六六.js', encoding='utf-8').read())
Authorization = js.call('get_headers')


headers = {
    # "Accept": "*/*",
    # "Accept-Language": "zh-CN,zh;q=0.9",
    "Authorization": Authorization,
    # "Connection": "keep-alive",
    # "Content-Type": "application/json",
    "Referer": "https://servicewechat.com/wxa0545fcd02d93b5d/194/page-frame.html",
    # "Sec-Fetch-Dest": "empty",
    # "Sec-Fetch-Mode": "cors",
    # "Sec-Fetch-Site": "cross-site",
    # "Terminal": "windows",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
    # "xweb_xhr": "1"
}
url = "https://66miniapp-api.66zhizu.com/client/search/house"
params = {
    "sequence": "1727491297.435;1728290526.089",
    "city": "上海",
    "region": "",
    "distance": "",
    "longitude": "",
    "latitude": "",
    "stations": "",
    "bed_count": "",
    "rent_type": "",
    "sort": "",
    "cost1": "",
    "cost2": ""
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)