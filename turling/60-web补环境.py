# -*- coding: utf-8 -*-

from flask import Flask, request

from selenium import webdriver
import os
from selenium.webdriver.common.by import By
# pip install flask
from flask import Flask, jsonify

PRO_DIR = os.path.dirname(os.path.abspath(__file__))


def driver_sig(html_file):
    option = webdriver.ChromeOptions()
    option.add_argument('--disable-blink-features=AutomationControlled')
    # option.add_argument('headless')
    driver = webdriver.Chrome(options=option)
    driver.get(PRO_DIR + '\\' + html_file)
    # time.sleep(2)
    # sig = driver.execute_script('return window.aaa()')
    # print(sig)
    return driver


html_file = '58-selenium补环境.html'
driv = driver_sig(html_file)

# 创建 Flask 应用实例
app = Flask(__name__)


# 定义路由和视图函数
@app.route('/s', methods=['get', 'post'])
def hello():
    context = {
        # 加载本地地址 生成cookie值
        'v': driv.execute_script('return window.aaa()')
    }
    # 返回cookie值
    return jsonify(context=context)



# 启动应用
if __name__ == '__main__':
    app.run()
