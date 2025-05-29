from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as cry_pksc1_v1_5
import base64

def encrypto(pk, password):
    public_key = "-----BEGIN PUBLIC KEY-----\n{}\n-----END PUBLIC KEY-----".format(pk)
    rsakey = RSA.importKey(public_key)
    cipher = cry_pksc1_v1_5.new(rsakey)
    miwen_encode = cipher.encrypt(password.encode())
    cipher_text = base64.b64encode(miwen_encode)
    miwen = cipher_text.decode()

    return miwen


if __name__ == '__main__':
    pk = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaP+rYm6rqTMP565UmMU6YXq46KtAN3zwDSO8LNa15p0lJfsaY8jXY7iLsZqQZrGYr2Aayp6hYZy+Q+AMB/VUiSpD9ojPyOQ7r9jsf9jZbTOL4kj6iLZn37fEhp4eLvRgy5EJCyQoFyLCsgLechBTlYl2eA95C3j4ZUFhiV6WFHQIDAQAB'
    password = encrypto(pk, 'demo123')
    print("password:", password)