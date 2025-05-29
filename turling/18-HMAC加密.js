
var CryptoJS = require('crypto-js');

function HMACEncrypt() {
    var text = "上海是一个有趣的城市"
    var key = "helloi";
    // return CryptoJS.HmacMD5(text, key).toString();
    // return CryptoJS.HmacSHA1(text, key).toString();
    return CryptoJS.HmacSHA256(text, key).toString();
}

console.log(HMACEncrypt(), HMACEncrypt().length);