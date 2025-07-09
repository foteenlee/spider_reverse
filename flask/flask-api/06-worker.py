import hashlib
from flask import Flask, request, jsonify
import pymysql
from dbutils.pooled_db import PooledDB
import uuid
import redis
import json

app = Flask(__name__)

REDIS_POOL = redis.ConnectionPool(host='127.0.0.1', port=6379, encoding='utf-8', max_connections=100)
TASK_QUEUE = "spider_task_list"
RESULT_QUEUE = "spider_result_list"


@app.route('/task', methods=['POST'])
def task():
    ordered_string = request.json.get('ordered_string')
    if not ordered_string:
        return jsonify({"status": False, "error": "params wrong"})

    tid = str(uuid.uuid4())
    info_dict = {'tid': tid, 'data': ordered_string}

    conn = redis.Redis(connection_pool=REDIS_POOL)
    conn.lpush(TASK_QUEUE, json.dumps(info_dict))

    return jsonify({"status": True, "data": tid, "message": "being processed, will be fixed in 3 mins"})


@app.route('/result', methods=['GET'])
def result():
    tid = request.args.get('tid')
    if not tid:
        return jsonify({"status": False, "error": "params wrong"})

    conn = redis.Redis(connection_pool=REDIS_POOL)
    sign = conn.hget(RESULT_QUEUE, tid)
    if not sign:
        return jsonify({"status": True, "data":"", "mesage": "not finished, keep waiting"})

    sign_string = sign.decode('utf-8')
    conn.hdel(RESULT_QUEUE, tid)

    return jsonify({"status": True, "data": sign_string})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)
