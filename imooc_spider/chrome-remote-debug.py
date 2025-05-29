from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9221")
cb = webdriver.Chrome(options=options)


cb.get("https://www.zhihu.com/")
print(cb.title)