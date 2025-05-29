import requests
import execjs

js = execjs.compile(open('22-建筑市场jzsc.js',encoding='utf8').read())



headers = {
    "Referer": "https://jzsc.mohurd.gov.cn/data/company",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "v": "231012"
}

url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list"
params = {
    "pg": "1",
    "pgsz": "15",
    "total": "450"
}
response = requests.get(url, headers=headers, params=params)

#  python 报错Malformed UTF-8 data， 遇到蜜罐
res = js.call('b', response.text)
print(res)