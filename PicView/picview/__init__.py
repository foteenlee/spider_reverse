from flask import Flask

import picview


def create_app():
    app = Flask(__name__)

    from .views import viewer
    app.register_blueprint(viewer.vw)

    return app