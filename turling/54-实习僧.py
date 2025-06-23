import requests
from lxml import etree
import re
from fontTools.ttLib import TTFont


class SXS():
    def __init__(self):
        self.url = 'https://www.shixiseng.com/interns?keyword=%E4%BA%92%E8%81%94%E7%BD%91IT&city=%E5%85%A8%E5%9B%BD&type=intern&from=menu'
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }


    def get_data(self):
        res = requests.get(self.url, headers=self.headers)
        ttf = 'https://www.shixiseng.com' + re.findall('@font-face {    font-family: myFont;    src: url\((.*?)\);}', res.text)[0]
        # print(ttf)
        font = requests.get(ttf)
        # print(font.text)
        with open('font.woff', 'wb')as f:
            f.write(font.content)

        with open('index.html', 'w', encoding='utf-8')as f1:
            f1.write(res.text)

    def get_font_data(self):
        font = TTFont('font.woff')
        dic_font = {}
        dic_font1 = {}

        for k, v in font.getBestCmap().items():
            if v[3:]:
                # print(v)
                aa = '\\u00' + v[3:] if len(v[3:]) == 2 else '\\u' + v[3:]
                dic_font[hex(k).replace('0x', '&#x')] = aa.encode('utf-8').decode('unicode-escape')
        for k, v in font.getBestCmap().items():
            if v[3:]:
                # print(v)
                aa = '\\u00' + v[3:] if len(v[3:]) == 2 else '\\u' + v[3:]
                dic_font1[hex(k).replace('0x', '#x')] = aa.encode('utf-8').decode('unicode-escape')
        return dic_font, dic_font1


    def parse_Data(self, fon_data, fon_data1):
        with open('index.html', encoding='utf-8')as f:
            da = f.read()
        for k, v in fon_data.items():
            da = da.replace(k, v)
        for k, v in fon_data1.items():
            da = da.replace(k, v)

        # print(da)
        html_data = etree.HTML(da)
        for i in html_data.xpath('//div[@class="clearfix intern-detail"]'):
            price = i.xpath('.//p/span/text()')[0]
            title = i.xpath('.//p[1]/a/text()')[0]
            print(title, price)

    def main(self):
        self.get_data()
        fon_data, fon_data1 = self.get_font_data()
        self.parse_Data(fon_data, fon_data1)



if __name__ == '__main__':
    sxs = SXS()
    sxs.main()