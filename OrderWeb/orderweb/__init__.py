from flask import Flask, request, session, redirect


def auth():
    if request.path.startswith('/static'):
        return
    if request.path == '/login':
        return
    user_info = session.get('user_info')
    if user_info:
        return

    return redirect('/login')


def get_real_name():
    user_info = session.get('user_info')
    real_name = user_info['real_name']
    return real_name


def create_app():
    app = Flask(__name__)
    app.secret_key = 'get hot girls for you'

    from .views import account, order
    app.register_blueprint(account.ac)
    app.register_blueprint(order.od)
    app.before_request(auth)
    app.template_global()(get_real_name)

    return app
