
import websockets
import asyncio


# 发送数据给客户端
async def echo(websocket):
    mess = 'hello'
    await websocket.send(mess)
    return True


# 接受客户端返回给的数据
async def recv_msg(websocket):
    while True:
        rec_text = await websocket.recv()
        print(rec_text)

async def main(websocket):
    await echo(websocket)
    await recv_msg(websocket)

async def start_server():
    async with websockets.serve(main, '127.0.0.1', 8080):
        await asyncio.Future()  # 永远运行

asyncio.run(start_server())

# server = websockets.serve(main, '127.0.0.1', 8080)
# loop = asyncio.get_event_loop()
# loop.run_until_complete(server)
# # run_forever  保持异步的长链接
# loop.run_forever()
