import requests
import json
import execjs

js = execjs.compile(open('40-医保解密.js', encoding='utf-8').read())

for i in range(1, 5):

    he = js.call('get_headers')

    headers = {
        "Content-Type": "application/json",
        "Origin": "https://fuwu.nhsa.gov.cn",
        "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        "x-tif-nonce": he['x-tif-nonce'],
        "x-tif-paasid": "undefined",
        "x-tif-signature": he["x-tif-signature"],
        "x-tif-timestamp": str(he["x-tif-timestamp"])
    }
    cookies = {
        "amap_local": "310000",
        "acw_tc": "276aedef17497085682462678e43bcf53526e25ddc692636e1fb93abf84e4c",
        "yb_header_active": "-1"
    }
    url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"

    da = js.call('get_data', str(i), str(he["x-tif-timestamp"]))

    data = {
        "data": {
            "data": {
                "encData": da['data2']},
            "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
            "version": "1.0.0",
            "encType": "SM4",
            "signType": "SM2",
            "timestamp": str(he["x-tif-timestamp"]),
            "signData": da['data1']
        }
    }
    data = json.dumps(data, separators=(',', ':'))
    # print(data)
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    data1 = js.call('decrypt_Data', response.json()['data']['data']['encData'])
    print(data1)