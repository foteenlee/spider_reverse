import pymysql
from dbutils.pooled_db import PooledDB
from pymysql import cursors


POOL = PooledDB(
    creator=pymysql,
    maxconnections=10,
    mincached=2,
    maxcached=5,
    blocking=True,
    setsession=[],
    ping=0,
    host='127.0.0.1', port=3306, user='root', charset='utf8', db='orderweb'

)

def fetch_one(sql, params):
    conn = POOL.connection()
    cursor = conn.cursor(cursor=cursors.DictCursor)
    cursor.execute(sql, params)
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    return result


def fetch_all(sql, params):
    conn = POOL.connection()
    cursor = conn.cursor(cursor=cursors.DictCursor)
    cursor.execute(sql, params)
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    return result


def insert(sql, params):
    conn = POOL.connection()
    cursor = conn.cursor(cursor=cursors.DictCursor)
    cursor.execute(sql, params)
    conn.commit()
    cursor.close()
    conn.close()
    return cursor.lastrowid