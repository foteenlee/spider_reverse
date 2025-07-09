import redis

REDIS_CONN_PARAMS = {'host': '127.0.0.1', 'port': 6379, 'encoding': 'utf-8'}
conn = redis.Redis(**REDIS_CONN_PARAMS)
conn.lpush('test', '123')

data = conn.lpop('test')
print(data)