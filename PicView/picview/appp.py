import os
from flask import Flask, render_template, send_from_directory
import random
app = Flask(__name__)

# 配置图片文件夹路径
UPLOAD_FOLDER = 'static/images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# 确保图片文件夹存在
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route('/')
def index():
    # 获取图片文件夹中所有图片文件
    image_files = []
    for filename in os.listdir(UPLOAD_FOLDER):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            image_files.append(filename)
    filename = random.choice(image_files)
    print(filename)


    return render_template('index.html', imagename=filename)

@app.route('/images/<path:filename>')
def serve_image(filename):
    """提供图片文件服务"""
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)