from flask import Flask
import os
import picview

UPLOAD_FOLDER = os.path.join('static', 'images')

def create_app():
    app = Flask(__name__)

    from .views import viewer
    app.register_blueprint(viewer.vw)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    return app