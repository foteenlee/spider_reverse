
import hashlib

def get_md5():
    md5 = hashlib.md5()
    md5.update('1234'.encode())
    print(md5.hexdigest())


get_md5()