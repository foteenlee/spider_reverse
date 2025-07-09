import redis, json, hashlib


REDIS_POOL = redis.ConnectionPool(host='127.0.0.1', port=6379, encoding='utf-8', max_connections=100)
TASK_QUEUE = "spider_task_list"
RESULT_QUEUE = "spider_result_list"

def get_task():
    conn = redis.Redis(connection_pool=REDIS_POOL)
    data = conn.brpop(TASK_QUEUE, timeout=10)
    if not data:
        return
    return json.loads(data[1].decode('utf-8'))

def set_result(tid, value):
    conn = redis.Redis(connection_pool=REDIS_POOL)
    conn.hset(RESULT_QUEUE, tid, value)


def run():
    while True:
        task_dict = get_task()
        print(task_dict)
        if not task_dict:
            continue

        ordered_string = task_dict['data']
        encrypt_string = ordered_string + "560c52ccd288fed045859ed18bffd973"
        obj = hashlib.md5(encrypt_string.encode('utf-8'))
        sigh = obj.hexdigest()

        tid = task_dict['tid']
        set_result(tid, sigh)

if __name__ == '__main__':
    run()