from flask import Blueprint, render_template, request, redirect, session
from utils import db

ac = Blueprint('account', __name__)

@ac.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template("login.html")

    role = request.form.get('role')
    mobile = request.form.get('mobile')
    pwd = request.form.get('pwd')

    user_dict = db.fetch_one('select * from userinfo where role=%s and mobile=%s and password=%s', [role, mobile, pwd])
    print(user_dict)

    if user_dict:
        session['user_info'] = {"role": user_dict['role'], "real_name": user_dict['real_name'], "id": user_dict['id']}
        return redirect('/order/list')
    return render_template("login.html", error="用户名或密码错误")


@ac.route('/users')
def users():
    return "user lists"