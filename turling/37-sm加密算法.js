const {sm4} = require("sm-crypto");

var sm2 = require('sm-crypto').sm4

var key = '0123456789ABCDEF0123456789ABCDEF'

var dta = 'python'

text = sm2.encrypt(dta, key);
dec_data = sm4.encrypt(dta, key);

console.log(dec_data);
console.log(text);