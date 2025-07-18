import websockets
import asyncio
import requests
import json



def get_data(page):
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://jzsc.mohurd.gov.cn/data/company",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "accessToken;": "",
        "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "timeout": "30000",
        "v": "231012"
    }
    cookies = {
        "Hm_lvt_b1b4b9ea61b6f1627192160766a9c55c": "1727611270,1729236908,1729254589",
        "HMACCOUNT": "EF4E9D2D87A7D1A4",
        "Hm_lpvt_b1b4b9ea61b6f1627192160766a9c55c": "1729254807"
    }
    url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list"
    params = {
        "pg": "0",
        "pgsz": page,
        "total": "0"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)
    return response.text




# 发送数据给客户端
async def echo(websocket):
    for i in range(1, 5):
        data = get_data(i)
        print('发送数据给客户端')
        await websocket.send(data)


# 接受客户端返回给的数据
async def recv_msg(websocket):
    while True:
        rec_text = await websocket.recv()
        print(json.loads(rec_text))

async def main(websocket):
    await echo(websocket)
    await recv_msg(websocket)

async def start_server():
    async with websockets.serve(main, '127.0.0.1', 8080):
        await asyncio.Future()  # 永远运行

asyncio.run(start_server())
# get_data(3)