
import unicodedata
from fontTools.ttLib import TTFont


# 加载字体文件
font = TTFont('54-file.woff')
# 把字体转换成xml文件  : 查看字体的轮廓    字符映射
# font.saveXML('54-file.xml')
print(font['glyf']['uni4E09'].coordinates)