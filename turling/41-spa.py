import requests
import subprocess

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://spa14.scrape.center/page/5",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://spa14.scrape.center/api/movie/"
for i in range(1, 10):
    sign = subprocess.run(["node", "41-spa.js", str(i*10)], capture_output=True, text=True)
    print(sign.stdout.strip(), "---")
    params = {
        "limit": "10",
        "offset": "40",
        "sign": sign.stdout.strip(),
    }
    response = requests.get(url, headers=headers, params=params)

    print(response.text)
    print(response)