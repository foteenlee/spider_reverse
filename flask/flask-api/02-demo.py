import hashlib
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/bili', methods=['POST'])
def bili():
    ordered_string = request.json.get('ordered_string')
    if not ordered_string:
        return jsonify({"status": False, "error": "params wrong"})
    encrypt_string = ordered_string + "560c52ccd288fed045859ed18bffd973"
    obj = hashlib.md5(encrypt_string.encode('utf-8'))
    sigh = obj.hexdigest()
    return jsonify({"status": True, "sigh": sigh})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)
