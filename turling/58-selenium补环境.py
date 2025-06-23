import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

# driver_path = r"C:\Users\nigul\PycharmProjects\chromedriver-win64\chromedriver.exe"
# service = Service()

def test_data():
    # driver = webdriver.Chrome(service=service)
    driver = webdriver.Chrome()
    driver.get(r"C:\Users\nigul\PycharmProjects\ScrapySpider\turling\58-selenium补环境.html")
    print(driver.execute_script('return window.aaa()'))


if __name__ == '__main__':
    test_data()