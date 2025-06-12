var JSEncrypt = require('jsencrypt')
var crypto = require('crypto-js')

function v(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(A);
        e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(A, e).enumerable
            }
        ))),
            t.push.apply(t, n)
    }
    return t
};

function b(A, e, t) {
    return e in A ? Object.defineProperty(A, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : A[e] = t,
        A
}


function m(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? v(Object(t), !0).forEach((function (e) {
                b(A, e, t[e])
            }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function (e) {
                Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
            }
        ))
    }
    return A
};

function md5(e) {
    return crypto.MD5(e).toString(crypto.enc.Hex)
}

function w(A) {
            var e, t, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = "=";
            for (e = 0; e + 3 <= A.length; e += 3)
                t = parseInt(A.substring(e, e + 3), 16),
                n += r.charAt(t >> 6) + r.charAt(63 & t);
            e + 1 == A.length ? (t = parseInt(A.substring(e, e + 1), 16),
            n += r.charAt(t << 2)) : e + 2 == A.length && (t = parseInt(A.substring(e, e + 2), 16),
            n += r.charAt(t >> 2) + r.charAt((3 & t) << 4));
            while ((3 & n.length) > 0)
                n += a;
            return n
        }


function encryptLong(aa, A) {
    var e = aa.getKey()
              , t = (e.n.bitLength() + 7 >> 3) - 11;
    var n = ""
        , r = "";
    if (A.length > t)
        return n = A.match(/.{1,50}/g),
            n.forEach((function (A) {
                    var t = e.encrypt(A);
                    r += t
                }
            )),
            w(r);
}


function get_pars(r, e) {
    var jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(r)
    a = m(m({}, e), {}, {
        sign: md5(JSON.stringify(e)),
        timeStamp: +new Date
    })
    s = encryptLong(jsEncrypt, JSON.stringify(a))
    return s

}


p_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCX3ce5epa5PAa++/soN12YCSq5OiwRhSzOWk0xnCJgiER/z3qfltNA4v4ZhnJaKXE/UNpRvhqbFhmc226/JM0p1s51g3p2ijFx1BuPwdZaCTpCdBv+M6YQqVBVhDMnVmf2m0cJrPKnMVLJm0W074XaAN3TbYGxmlp6T2b+q+ePQIDAQAB"
e = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZBGG",
    "dwmc": "",
    "pageIndex": 14
}
console.log(get_pars(p_key, e));






