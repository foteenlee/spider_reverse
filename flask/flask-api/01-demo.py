from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/index', methods=['GET', 'POST'])
def index():
    age = request.args.get('age')
    pwd = request.args.get('pwd')
    print(age, pwd)

    x = request.form.get('x')
    y = request.form.get('y')
    print(x, y)

    print(request.json, type(request.json))

    return jsonify({'age': age, 'pwd': pwd})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)