

var JSEncrypt = require('jsencrypt')


loginPBK = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQComqoAyvbCqO1EGsADwfNTWFQIUbm8CLdeb9TgjGLcz95mAo204SqTYdSEUxFsOnPfROOTxhkhfjbRxBV4/xjS06Y+kkUdiMGFtABIxRQHQIh0LrVvEZQs4NrixxcPI+b1bpE0gO/GAFSNWm9ejhZGj7UnqiHphnSJAVQNz2lgowIDAQAB"

var encrypt = new JSEncrypt();
encrypt.setPublicKey(loginPBK);
var pwd2 = encrypt.encrypt('123456');

console.log(pwd2);