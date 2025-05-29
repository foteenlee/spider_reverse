import execjs


with open('08-异步js代码.js', encoding='utf-8') as f:
    js_code = f.read()


js = execjs.compile(js_code)

# data1 = js.eval('aa(3, 5)')
# print(data1)
#
# data2 = js.call('aa', 4, 5)
# print(data2)

print(js.call('get_async', '123'))