


import requests
import execjs
import pymongo

# db = pymongo.MongoClient()
# bb = db['spiders16']['wukuang']
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "sec-ch-ua": "\\Chromium;v=\\128, \\Not;A=Brand;v=\\24, \\Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\\Windows"
}
cookies = {
    "__jsluid_s": "d3d8bdc189e58467b15738b915988ec8",
    "SUNWAY-ESCM-COOKIE": "2ae72f3c-4dd2-43e9-9f18-9bcc93dd2518",
    "JSESSIONID": "F0B6E21EF34C608602151A9FFAD96B64"
}
url = "https://ec.minmetals.com.cn/open/homepage/public"
response = requests.post(url, headers=headers, cookies=cookies)


pukey = response.text

for i in range(1, 10):

    js = execjs.compile(open('31-五矿.js', encoding='utf-8').read())

    e = {
        "inviteMethod": "",
        "businessClassfication": "",
        "mc": "",
        "lx": "ZBGG",
        "dwmc": "",
        "pageIndex": i
    }

    params = js.call('get_pars', pukey, e)

    data = {
        'param': params
    }
    res = requests.post('https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page', headers=headers, json=data)
    print(res.text)

    # for i in res.json()['list']:
    #     item = {}
    #     item['bm'] = i['bm']
    #     item['condDes'] = i['condDes']
    #     item['dwmc'] = i['dwmc']
    #     item['mc'] = i['mc']
    #     # print(item)
    #     bb.insert_one(item)




