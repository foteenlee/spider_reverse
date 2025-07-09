import hashlib
from flask import Flask, request, jsonify

app = Flask(__name__)


def get_user_dict():
    info_dict = {}
    with open('03-db.txt', mode='r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            token, name = line.split(',')
            info_dict[token] = name
    return info_dict


@app.route('/bili', methods=['POST'])
def bili():
    token = request.args.get('token')
    if not token:
        return jsonify({"status": False, "error": "认证失败"})

    user_dict = get_user_dict()
    if token not in user_dict:
        return jsonify({"status": False, "error": "认证失败"})

    ordered_string = request.json.get('ordered_string')
    if not ordered_string:
        return jsonify({"status": False, "error": "params wrong"})
    encrypt_string = ordered_string + "560c52ccd288fed045859ed18bffd973"
    obj = hashlib.md5(encrypt_string.encode('utf-8'))
    sigh = obj.hexdigest()
    return jsonify({"status": True, "sigh": sigh})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)
