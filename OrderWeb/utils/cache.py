import redis

POOL = redis.ConnectionPool(host='127.0.0.1', port=6379, encoding='utf-8', max_connections=1000)

def push_queue(value):
    conn = redis.Redis(connection_pool=POOL)
    conn.lpush('TASK_QUEUE', value)