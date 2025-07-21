import os, random
from flask import Blueprint, render_template, send_from_directory, current_app
from ..import UPLOAD_FOLDER

vw = Blueprint('vw', __name__)

# 配置图片文件夹路径
# UPLOAD_FOLDER = 'static/images'

# 确保图片文件夹存在
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@vw.route('/')
def index():
    # 获取图片文件夹中所有图片文件
    image_files = []
    for filename in os.listdir(UPLOAD_FOLDER):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            image_files.append(filename)
    if not image_files:
        return "没有找到图片", 404
    filename = random.choice(image_files)

    return render_template('index.html', imagename=filename)


@vw.route('/images/<path:filename>')
def serve_image(filename):
    """提供图片文件服务"""
    return send_from_directory(current_app.config['UPLOAD_FOLDER'], filename)
