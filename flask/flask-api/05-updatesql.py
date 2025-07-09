import hashlib
from flask import Flask, request, jsonify
import pymysql
from dbutils.pooled_db import PooledDB

app = Flask(__name__)

POOL = PooledDB(
    creator=pymysql,
    maxconnections=10,
    mincached=2,
    maxcached=5,
    blocking=True,
    setsession=[],
    ping=0,
    host='127.0.0.1', port=3306, user='root', charset='utf8', db='flask'

)

def fetch_one(sql, params):
    conn = POOL.connection()
    cursor = conn.cursor()
    cursor.execute(sql, params)
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    return result


@app.route('/bili', methods=['POST'])
def bili():
    token = request.args.get('token')
    if not token:
        return jsonify({"status": False, "error": "认证失败"})

    result = fetch_one('select * from user where token=%s', [token, ])

    if not result:
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
