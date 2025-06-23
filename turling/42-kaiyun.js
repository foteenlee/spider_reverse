var fs = require('fs')
var wasmcode = fs.readFileSync('42-kaiyun.wasm');


window = global;
self = window

var bc;
!function(e) {
    "use strict";
    var e = e
      , c = {};
    function a(f) {
        var d = c[f];
        if (void 0 !== d)
            return d.exports;
        var b = c[f] = {
            id: f,
            loaded: !1,
            exports: {}
        }
          , t = !0;
        try {
            console.log(f)
            e[f].call(b.exports, b, b.exports, a),
            t = !1
        } finally {
            t && delete c[f]
        }
        return b.loaded = !0,
        b.exports
    }
    a.m = e,
    a.c = c,
    a.amdD = function() {
        throw new Error("define cannot be used indirect")
    }
    ,
    a.amdO = {},
    function() {
        var e = [];
        a.O = function(c, f, d, b) {
            if (!f) {
                var t = 1 / 0;
                for (i = 0; i < e.length; i++) {
                    f = e[i][0],
                    d = e[i][1],
                    b = e[i][2];
                    for (var n = !0, s = 0; s < f.length; s++)
                        (!1 & b || t >= b) && Object.keys(a.O).every((function(e) {
                            return a.O[e](f[s])
                        }
                        )) ? f.splice(s--, 1) : (n = !1,
                        b < t && (t = b));
                    if (n) {
                        e.splice(i--, 1);
                        var r = d();
                        void 0 !== r && (c = r)
                    }
                }
                return c
            }
            b = b || 0;
            for (var i = e.length; i > 0 && e[i - 1][2] > b; i--)
                e[i] = e[i - 1];
            e[i] = [f, d, b]
        }
    }(),
    a.n = function(e) {
        var c = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(c, {
            a: c
        }),
        c
    }
    ,
    a.d = function(e, c) {
        for (var f in c)
            a.o(c, f) && !a.o(e, f) && Object.defineProperty(e, f, {
                enumerable: !0,
                get: c[f]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(c, f) {
            return a.f[f](e, c),
            c
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return 9651 === e ? "static/chunks/9651.6e8b3b3437f1dce0.js" : 2284 === e ? "static/chunks/2284.d7d5979f4b177dd4.js" : 3451 === e ? "static/chunks/3451.39c9dfb84238a91a.js" : 5411 === e ? "static/chunks/5411.46d55648fdb20d92.js" : 4631 === e ? "static/chunks/4631.26b77c2f5e0ffaff.js" : 2945 === e ? "static/chunks/2945.e267506e9fad1f5f.js" : 7367 === e ? "static/chunks/7367.9b719b88bdaa752c.js" : 7207 === e ? "static/chunks/7207.6429d5575f101941.js" : 1571 === e ? "static/chunks/1571.6716c2002a4cefeb.js" : 7039 === e ? "static/chunks/7039.8bc181f2b35b59b5.js" : 5856 === e ? "static/chunks/5856.d1ddcafb2e71455a.js" : 2397 === e ? "static/chunks/2397.1241b5d6957ea0d3.js" : 3628 === e ? "static/chunks/3628.eadec69401ca08cc.js" : 9670 === e ? "static/chunks/9670.f4b417cb5ebe283b.js" : 1011 === e ? "static/chunks/1011.c767f813008a3db4.js" : 7926 === e ? "static/chunks/7926.11b94879a15ee1c7.js" : 4956 === e ? "static/chunks/4956.9e73795e26ad84a7.js" : 5008 === e ? "static/chunks/5008.b6ee69b4682bcf18.js" : 3780 === e ? "static/chunks/3780.8a07840d865b89f8.js" : 1065 === e ? "static/chunks/1065.7befb9794322a6ae.js" : 1976 === e ? "static/chunks/1976.e84778436918a900.js" : 8013 === e ? "static/chunks/8013.26207abfef3d9dec.js" : 8933 === e ? "static/chunks/8933.6a79786b670492f7.js" : 2794 === e ? "static/chunks/2794.0e6e0984838a2e5d.js" : 6760 === e ? "static/chunks/6760.6845a1fcb6799e6f.js" : 4385 === e ? "static/chunks/4385.fe413bfe9b636c20.js" : 9120 === e ? "static/chunks/9120.31e728f3021fe884.js" : 8255 === e ? "static/chunks/8255.fec8e9120199e2f0.js" : 4903 === e ? "static/chunks/4903.d49e39202ab13ff1.js" : 609 === e ? "static/chunks/609.532e4a75d2328f94.js" : 392 === e ? "static/chunks/392.a24b2ffe40b31f7e.js" : 8330 === e ? "static/chunks/8330.767ad2af58c01897.js" : 1913 === e ? "static/chunks/1913.7c5e7f6398df7135.js" : 9476 === e ? "static/chunks/9476.23aa766e2d9cb9cc.js" : 5475 === e ? "static/chunks/5475.cc0110ce11e6f6ec.js" : 794 === e ? "static/chunks/794.e95b38b20a06fc22.js" : 1125 === e ? "static/chunks/1125.9dae085ee0be2b78.js" : 7341 === e ? "static/chunks/7341.3fa281ca45df759d.js" : 4033 === e ? "static/chunks/4033.cb2e0455246f8b12.js" : 151 === e ? "static/chunks/151.474f11110e24f383.js" : 1723 === e ? "static/chunks/1723.b12477bcae66b13f.js" : 8702 === e ? "static/chunks/8702.7b747c50b10466c3.js" : 2904 === e ? "static/chunks/2904.994e41f754ed3b8c.js" : 7646 === e ? "static/chunks/7646.dc2ea5a3f576565b.js" : 9248 === e ? "static/chunks/9248.7407d645156b8e33.js" : 6671 === e ? "static/chunks/6671.4c6c8b862aaa54ef.js" : 9779 === e ? "static/chunks/9779.30c4a720bc40d462.js" : 6798 === e ? "static/chunks/6798.23e582d4e764a2a9.js" : 100 === e ? "static/chunks/100.8730f1ed1da1cbd1.js" : 3966 === e ? "static/chunks/3966.cf39c389ed6a78f8.js" : 2566 === e ? "static/chunks/2566.1dd3337bbb66e03a.js" : "static/chunks/" + e + "-" + {
            163: "2b19bf14a988065a",
            381: "939c31fcce577bf1",
            665: "01905129a610af2e",
            935: "b9723d53bc295d69",
            1093: "d12b0d0a3e5ccaf6",
            1230: "7fba61eb8b0c47e6",
            1414: "f4ecff12aedf95f8",
            1563: "588f6b7a1839b484",
            1632: "2edf1a6e46fa11d2",
            1646: "73f668bf54c196f0",
            2001: "bcd299a81a179ae9",
            2050: "f4e3a1abb303fb89",
            2077: "23d50d95610daceb",
            2206: "5e684a761513559d",
            2565: "a54812d832db6bb9",
            2639: "38cd32979d809a06",
            2655: "4f8a743c07e44d9d",
            2975: "e66e327c37eab707",
            2993: "d9d1931bbe96ad77",
            3013: "8628c1bc24429bde",
            3138: "e87dc45bc7651449",
            3192: "d7bf5f73dfe53508",
            3332: "3a678b0d507a3d81",
            3511: "780d445eec0d135f",
            3708: "242a568192b88cf6",
            3710: "c958c853c01f3b13",
            3855: "ddddbc437fab1681",
            3898: "74d02ecba3f35446",
            3913: "f87443340ca33305",
            4109: "9137e3db4ca9616f",
            4159: "493e43d6086e9be6",
            4219: "27ad9235a4c9dbb9",
            4543: "35d80fa5fa56605b",
            4937: "b61458ffb812ca55",
            4959: "f067c27f5863078a",
            5549: "354b2d42acbe5892",
            5632: "da840a23670e1ddc",
            5709: "0d10b7654d502e48",
            5903: "329a770fb37b1d53",
            6127: "b52242070d3c51cc",
            6643: "4bdba3e47b894e0a",
            7079: "19f025e154aa46b3",
            7091: "9a00329d79920fe7",
            7420: "3d52996186c77528",
            7517: "6fb9289e07029d53",
            7555: "760489cc159ddd2c",
            7615: "e8958c145ba3147b",
            7713: "128e2f9138855b64",
            7753: "2f0f3cc75fe37687",
            7998: "e29f3e0a4bbb9338",
            8028: "2f4e8453e89407f4",
            8035: "b26862a9644d2c79",
            8130: "9397e8804a0593cc",
            8168: "ac5c52605cbec7f4",
            8235: "b49fb3360abbedf7",
            8343: "9a9dfaa975b7ebeb",
            8420: "0489065708281056",
            8453: "f4db3215eea2891c",
            8525: "45010f4fd36c6c0e",
            8575: "8dd6dc788f0596f8",
            8595: "c38499f2dfeb665d",
            8757: "bc6be6d77b2cb314",
            9019: "e19456d3a887282f",
            9138: "1984d2cbb129c2d2",
            9305: "34541dfcd65793d2",
            9361: "ea0fd69fcb99d267",
            9536: "e5d697b2f88404d0",
            9937: "ebab5b4815768e2d"
        }[e] + ".js"
    }
    ,
    a.miniCssF = function(e) {
        return "static/css/" + {
            15: "d096885f334f1e2d",
            100: "e29c6e56d02a763c",
            173: "027e25992c3368a9",
            191: "501a4aeaaa70fc04",
            239: "4922f2120d4d3352",
            315: "1d009dd660555adb",
            392: "61f68e84fc116fc5",
            404: "7737ae2a0d32e7b7",
            459: "61dc8d7a883ed5c2",
            469: "b469b8acd96a943f",
            494: "2c213ccac700637a",
            601: "f06155da5190121b",
            609: "7f4d9454079bc371",
            633: "fd8f42b05fa953ec",
            662: "d13299b5b4c65324",
            794: "52644f38151f4301",
            881: "80ebd5f162f34c44",
            885: "8a2a371af99f8df8",
            913: "520ab26dece17f55",
            1004: "4b3f7f9dd7ded498",
            1011: "1e2db86c88414be8",
            1065: "bf530eb4427abb2e",
            1067: "8895eded1796925c",
            1093: "ab24c35f9dc276a7",
            1125: "b8d9dd65d3a840c6",
            1274: "6167b6745ab35e86",
            1292: "6aa3eddf5c4e5452",
            1296: "7e75499758617954",
            1397: "06309bd61b3f9b2b",
            1456: "c5c3ab856f59e15e",
            1510: "29341e5c3faacd8f",
            1539: "12b6d07ab3413d90",
            1563: "6c1d5b245972553e",
            1571: "4c41a7ec25829f76",
            1632: "50691eebe46b9438",
            1646: "33c3002420b18557",
            1647: "972f359fcdc76d3f",
            1675: "b5ab135048fe186b",
            1723: "e9e273381cdad0fd",
            1764: "b19cb68867a78c63",
            1826: "e106acb75ebd80f3",
            1860: "77e5930e3b308039",
            1913: "32aa79d0040c3c73",
            1942: "b58e3f5be05b506e",
            1957: "df2f2f714576089d",
            2012: "61b2e723d6b6c5f0",
            2029: "5ed3b649a603912d",
            2050: "803a2b004078d89d",
            2108: "89f3b7b2b67ca4e3",
            2145: "a085b234308e539d",
            2152: "0e517383ac0102de",
            2174: "35cdf11f6f39581a",
            2197: "d38494a529b0bfd2",
            2306: "58ace1e33f698b18",
            2309: "3cb59d007850f2c2",
            2322: "d2d7449387953610",
            2365: "3f512bf338b73392",
            2397: "1480a7bff516697e",
            2443: "b4f7e65f1c0a8652",
            2566: "59a1c05784b1e1e2",
            2637: "eb45e7d99f723718",
            2655: "e6217b3d9d08b6a0",
            2675: "e700008df541923d",
            2794: "7dbbf5cbce53088a",
            2888: "750863326e6338a6",
            2904: "f56953e1f210e13d",
            2918: "1ffb10ea0d8d4c80",
            2945: "c03af4a07a2081f2",
            2975: "3216e3af2b3adc6e",
            2976: "eaad83d464c58b6a",
            3010: "8f8dadb844a15b80",
            3013: "1b8e083709fe402f",
            3015: "a38d2f3e91b55684",
            3045: "15c7750503780def",
            3105: "0ea029208965eae9",
            3138: "44858ff9bf1df3a7",
            3152: "e58a9f2689ade780",
            3210: "ebf4b3b80b7424f2",
            3227: "ee6ea8556931ccce",
            3228: "5e4e3dfb1b3c49e6",
            3229: "9e1cf849a11d941e",
            3252: "1a8be7b4b60a82db",
            3292: "341ea6d55ebea6ee",
            3332: "708531fb399b95dd",
            3369: "1e2db86c88414be8",
            3451: "cad7b098249fbb06",
            3565: "995a34997d852fdf",
            3628: "8531e755b20c263a",
            3707: "265910177dc9820b",
            3708: "672a5dfb4d3e077e",
            3844: "04d8f94512f2ca64",
            3845: "79d66ed21ab2d914",
            3855: "200d2fcae3586f1d",
            3898: "6de2506bab46b2fc",
            3937: "3e49fe37c2e15dfe",
            3963: "85bd877feede7be2",
            3966: "719519f85ed2be74",
            4033: "edcf4c8da61931d0",
            4090: "1ce4540420f17dc8",
            4102: "5a83111f29cd8e1d",
            4193: "78311a0465abbdc1",
            4416: "b838e38ea9cfe156",
            4443: "4c41a7ec25829f76",
            4508: "306ec5561428f0a4",
            4533: "c3dc90f2c3799f55",
            4536: "2f40bb4404c4dea3",
            4540: "7d768ce030ef546a",
            4569: "0546b647f0c73015",
            4631: "e8d35e528cb2f961",
            4725: "4d74d05330d30cfb",
            4903: "1ddcddab9372f22b",
            4926: "1a1f614cd943f4b1",
            4929: "4ea405054962991b",
            4956: "b3a890563fc6ceac",
            5008: "b873ce333ed48480",
            5056: "fc2b2ff158b45af6",
            5241: "892258ca24bfae72",
            5387: "02919b3a5517c95b",
            5394: "767927d35331b3bd",
            5411: "926dd3ba6660f675",
            5425: "93d0288ccb08a53f",
            5475: "1519b413056570f4",
            5510: "d9143cf02ad6f921",
            5603: "9223c2a876ff2db7",
            5632: "34ee03d31c4de691",
            5819: "1c73789dab6e5573",
            5827: "58ace1e33f698b18",
            5853: "246c1110bb745e02",
            5856: "9c067598f8944444",
            5927: "34d5fa4314c877cf",
            5954: "3cb59d007850f2c2",
            6019: "1a2d605797b22732",
            6061: "cb7ca7f4f11d9516",
            6103: "f73d5225b475fc77",
            6127: "9d794b6977c7ff4a",
            6184: "d13299b5b4c65324",
            6206: "cd19ad0143bed8b0",
            6322: "75aaef0de9014230",
            6386: "7b2f1846936a6f4f",
            6482: "9f2483f5b0422a86",
            6558: "0f8201b0822db73d",
            6582: "2f6516e0b04c8b8e",
            6611: "3954824dcd5b3353",
            6633: "e40857d2f3709fc4",
            6643: "86e2d1be771edebe",
            6671: "fdd1ec80d89c1f5d",
            6690: "a7ec3a023c2f7953",
            6760: "6ffde8e922de53b7",
            6774: "6206505983145c6d",
            6798: "5e8e735cf33b071d",
            6801: "1bbf43d86ff78c8f",
            6825: "ff421daa3afcb4d1",
            6831: "3c5050576e0ec2f2",
            6842: "2b66ab3014db8eb8",
            6853: "dd9382142c98ca87",
            6867: "161c300e29a166c7",
            6868: "c03af4a07a2081f2",
            6935: "5cf675d49f5ab8d5",
            6938: "80166a6ff644c107",
            7008: "6abe536326c0e38f",
            7011: "958d7f1e74a4d5d1",
            7035: "2c2f8e11c49455f7",
            7074: "2654a9b9aafd4cc2",
            7079: "7e326b02e575a7cb",
            7091: "2a20b03573489da1",
            7207: "eaad83d464c58b6a",
            7229: "17e38bc96a9e2f06",
            7276: "1b3303ec5ae31338",
            7288: "d78d1739e493f72f",
            7294: "54b3b48671b5e6f0",
            7307: "1512385dd8d04b42",
            7341: "05b6ce0a620cd1ca",
            7367: "a05721532fd3054e",
            7386: "b3c61415a9d2d2b7",
            7414: "d2f8226e26e468d8",
            7491: "6b5e32954257103b",
            7516: "003c6938c19cb7e9",
            7517: "cd1170dfcd37d3d0",
            7536: "f7c59c504e782b1a",
            7549: "29a087159f0e5ae4",
            7615: "ec45e3e38bb778ed",
            7646: "fdd1ec80d89c1f5d",
            7713: "5c95ec6a5415792f",
            7752: "66909e5fd5bc56b0",
            7753: "3dace4cf696a5a9a",
            7773: "e4e35d5ea27016f4",
            7796: "49fe23ed03c8c1d1",
            7842: "03905c451ca729a8",
            7893: "7c51c1bb20c0f5d0",
            7926: "9223c2a876ff2db7",
            7950: "498c7830e6c00e95",
            8002: "56b70ef34460eec4",
            8013: "5bdd36833292230b",
            8022: "9b6490e418aa30a1",
            8028: "7f678cdf21210f30",
            8101: "bd33c144fa30d518",
            8154: "72433e646b2e0360",
            8237: "67e2b936440eb2d8",
            8312: "a056e0c652ba43e1",
            8330: "eaa0b780f832f866",
            8420: "2cf0b49858840f93",
            8440: "f079ae7dbc37c6b4",
            8469: "0fd2a74aca746430",
            8479: "635cf3bc50afdf31",
            8486: "db0a48f72f5b89b4",
            8498: "f0caf8c0575c712a",
            8525: "3a1aaf91ab9c78ac",
            8527: "8573df4a1c18d9c1",
            8575: "b34ad0893d2d90b9",
            8595: "564a9efe4227b7fd",
            8598: "be96fe22bf44b089",
            8702: "e9e273381cdad0fd",
            8757: "67c0d561b11a09d6",
            8804: "f84d4541e40eaf0b",
            8867: "9d643eda372a6763",
            8933: "84f096cb79e894e7",
            8949: "9d48c1dedfc63ea8",
            9019: "9f0098deb6fae578",
            9035: "d1f9d058d55fa765",
            9066: "e6fd022aa3c959af",
            9116: "bbd288169a3bd005",
            9120: "a686a68810133b16",
            9166: "55af3ea1a25c828b",
            9204: "4797e74212ba9844",
            9248: "123e1fbac57202a2",
            9308: "3cb59d007850f2c2",
            9357: "cb7eb28740eb6711",
            9430: "951ede56e717388d",
            9472: "7e3e36244e5cb23d",
            9476: "4ee81a34f44d04df",
            9619: "186af1aec617fefc",
            9669: "8028ebcb71713a65",
            9670: "7e66d65b97cff2a7",
            9739: "b6245a1ce3ac09f9",
            9781: "02c7b0dbc09defbf",
            9817: "866d5ff0cbc27fe8",
            9848: "5334171e6cef80b6",
            9955: "992b0f74bfd6b8b7"
        }[e] + ".css"
    }
    ,
    a.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    a.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    a.o = function(e, c) {
        return Object.prototype.hasOwnProperty.call(e, c)
    }
    ,
    function() {
        var e = {}
          , c = "_N_E:";
        a.l = function(f, d, b, t) {
            if (e[f])
                e[f].push(d);
            else {
                var n, s;
                if (void 0 !== b)
                    for (var r = document.getElementsByTagName("script"), i = 0; i < r.length; i++) {
                        var u = r[i];
                        if (u.getAttribute("src") == f || u.getAttribute("data-webpack") == c + b) {
                            n = u;
                            break
                        }
                    }
                n || (s = !0,
                (n = document.createElement("script")).charset = "utf-8",
                n.timeout = 120,
                a.nc && n.setAttribute("nonce", a.nc),
                n.setAttribute("data-webpack", c + b),
                n.src = f),
                e[f] = [d];
                var o = function(c, a) {
                    n.onerror = n.onload = null,
                    clearTimeout(h);
                    var d = e[f];
                    if (delete e[f],
                    n.parentNode && n.parentNode.removeChild(n),
                    d && d.forEach((function(e) {
                        return e(a)
                    }
                    )),
                    c)
                        return c(a)
                }
                  , h = setTimeout(o.bind(null, void 0, {
                    type: "timeout",
                    target: n
                }), 12e4);
                n.onerror = o.bind(null, n.onerror),
                n.onload = o.bind(null, n.onload),
                s && document.head.appendChild(n)
            }
        }
    }(),
    a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    a.p = "/_next/",
    function() {
        var e = function(e) {
            return new Promise((function(c, f) {
                var d = a.miniCssF(e)
                  , b = a.p + d;
                if (function(e, c) {
                    for (var a = document.getElementsByTagName("link"), f = 0; f < a.length; f++) {
                        var d = (t = a[f]).getAttribute("data-href") || t.getAttribute("href");
                        if ("stylesheet" === t.rel && (d === e || d === c))
                            return t
                    }
                    var b = document.getElementsByTagName("style");
                    for (f = 0; f < b.length; f++) {
                        var t;
                        if ((d = (t = b[f]).getAttribute("data-href")) === e || d === c)
                            return t
                    }
                }(d, b))
                    return c();
                !function(e, c, a, f) {
                    var d = document.createElement("link");
                    d.rel = "stylesheet",
                    d.type = "text/css",
                    d.onerror = d.onload = function(b) {
                        if (d.onerror = d.onload = null,
                        "load" === b.type)
                            a();
                        else {
                            var t = b && ("load" === b.type ? "missing" : b.type)
                              , n = b && b.target && b.target.href || c
                              , s = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                            s.code = "CSS_CHUNK_LOAD_FAILED",
                            s.type = t,
                            s.request = n,
                            d.parentNode.removeChild(d),
                            f(s)
                        }
                    }
                    ,
                    d.href = c,
                    document.head.appendChild(d)
                }(e, b, c, f)
            }
            ))
        }
          , c = {
            2272: 0
        };
        a.f.miniCss = function(a, f) {
            c[a] ? f.push(c[a]) : 0 !== c[a] && {
                100: 1,
                392: 1,
                609: 1,
                794: 1,
                1011: 1,
                1065: 1,
                1093: 1,
                1125: 1,
                1563: 1,
                1571: 1,
                1632: 1,
                1646: 1,
                1723: 1,
                1913: 1,
                2050: 1,
                2397: 1,
                2566: 1,
                2655: 1,
                2794: 1,
                2904: 1,
                2945: 1,
                2975: 1,
                3013: 1,
                3138: 1,
                3332: 1,
                3451: 1,
                3628: 1,
                3708: 1,
                3855: 1,
                3898: 1,
                3966: 1,
                4033: 1,
                4631: 1,
                4903: 1,
                4956: 1,
                5008: 1,
                5411: 1,
                5475: 1,
                5632: 1,
                5856: 1,
                6127: 1,
                6643: 1,
                6671: 1,
                6760: 1,
                6798: 1,
                7079: 1,
                7091: 1,
                7207: 1,
                7341: 1,
                7367: 1,
                7517: 1,
                7615: 1,
                7646: 1,
                7713: 1,
                7753: 1,
                7926: 1,
                8013: 1,
                8028: 1,
                8330: 1,
                8420: 1,
                8525: 1,
                8575: 1,
                8595: 1,
                8702: 1,
                8757: 1,
                8933: 1,
                9019: 1,
                9120: 1,
                9248: 1,
                9476: 1,
                9670: 1
            }[a] && f.push(c[a] = e(a).then((function() {
                c[a] = 0
            }
            ), (function(e) {
                throw delete c[a],
                e
            }
            )))
        }
    }(),
    function() {
        var e = {
            2272: 0,
            1632: 0,
            5425: 0,
            4443: 0,
            6127: 0,
            3708: 0,
            3937: 0,
            4416: 0,
            6386: 0,
            6103: 0,
            6825: 0
        };
        a.f.j = function(c, f) {
            var d = a.o(e, c) ? e[c] : void 0;
            if (0 !== d)
                if (d)
                    f.push(d[2]);
                else if (/^(44(16|43)|6(103|127|386|671|825)|1632|2272|3708|3937|5425|7207|7926)$/.test(c))
                    e[c] = 0;
                else {
                    var b = new Promise((function(a, f) {
                        d = e[c] = [a, f]
                    }
                    ));
                    f.push(d[2] = b);
                    var t = a.p + a.u(c)
                      , n = new Error;
                    a.l(t, (function(f) {
                        if (a.o(e, c) && (0 !== (d = e[c]) && (e[c] = void 0),
                        d)) {
                            var b = f && ("load" === f.type ? "missing" : f.type)
                              , t = f && f.target && f.target.src;
                            n.message = "Loading chunk " + c + " failed.\n(" + b + ": " + t + ")",
                            n.name = "ChunkLoadError",
                            n.type = b,
                            n.request = t,
                            d[1](n)
                        }
                    }
                    ), "chunk-" + c, c)
                }
        }
        ,
        a.O.j = function(c) {
            return 0 === e[c]
        }
        ;
        var c = function(c, f) {
            var d, b, t = f[0], n = f[1], s = f[2], r = 0;
            if (t.some((function(c) {
                return 0 !== e[c]
            }
            ))) {
                for (d in n)
                    a.o(n, d) && (a.m[d] = n[d]);
                if (s)
                    var i = s(a)
            }
            for (c && c(f); r < t.length; r++)
                b = t[r],
                a.o(e, b) && e[b] && e[b][0](),
                e[b] = 0;
            return a.O(i)
        }
          , f = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        f.forEach(c.bind(null, 0)),
        f.push = c.bind(null, f.push.bind(f))
    }(),
    function() {
        var e, c, f, d, b = {};
        var t = {
            238464: function() {
                return {
                    "./wasm_api_sign_bg.js": {
                        __wbg_now_513c8208bd94c09b: function() {
                            return void 0 === e && (e = a.c[988867].exports),
                            e.ei()
                        },
                        __wbg_random_9f33d5bdc74069f8: function() {
                            return void 0 === c && (c = a.c[988867].exports),
                            c.Aw()
                        },
                        __wbg_floor_a68aa7c1b572044e: function(e) {
                            return void 0 === f && (f = a.c[988867].exports),
                            f.OS(e)
                        },
                        __wbindgen_throw: function(e, c) {
                            return void 0 === d && (d = a.c[988867].exports),
                            d.Or(e, c)
                        }
                    }
                }
            }
        }
          , n = {
            2284: [238464]
        };
        a.w = {},
        a.f.wasm = function(e, c) {
            (n[e] || []).forEach((function(f, d) {
                var n = b[f];
                if (n)
                    c.push(n);
                else {
                    var s, r = t[f](), i = fetch(a.p + "static/wasm/" + {
                        2284: {
                            238464: "5bd33e776bcea985"
                        }
                    }[e][f] + ".wasm");
                    if (r && "function" === typeof r.then && "function" === typeof WebAssembly.compileStreaming)
                        s = Promise.all([WebAssembly.compileStreaming(i), r]).then((function(e) {
                            return WebAssembly.instantiate(e[0], e[1])
                        }
                        ));
                    else if ("function" === typeof WebAssembly.instantiateStreaming)
                        s = WebAssembly.instantiateStreaming(i, r);
                    else {
                        s = i.then((function(e) {
                            return e.arrayBuffer()
                        }
                        )).then((function(e) {
                            return WebAssembly.instantiate(e, r)
                        }
                        ))
                    }
                    c.push(b[f] = s.then((function(e) {
                        return a.w[f] = (e.instance || e).exports
                    }
                    )))
                }
            }
            ))
        }
    }()
    bc = a


}({
    988867: function(n, e, t) {
        t.d(e, {
            Xx: function() {
                return b
            },
            ei: function() {
                return g
            },
            Aw: function() {
                return h
            },
            OS: function() {
                return y
            },
            Or: function() {
                return m
            }
        });
        var r = t(238464);
        n = t.hmd(n);
        let o, u = new ("undefined" === typeof TextDecoder ? (0,
        n.require)("util").TextDecoder : TextDecoder)("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
        function c() {
            return 0 === o.byteLength && (o = new Uint8Array(r.memory.buffer)),
            o
        }
        function i(n, e) {
            return u.decode(c().subarray(n, n + e))
        }
        u.decode();
        let f = 0;
        let d = new ("undefined" === typeof TextEncoder ? (0,
        n.require)("util").TextEncoder : TextEncoder)("utf-8");
        const _ = "function" === typeof d.encodeInto ? function(n, e) {
            return d.encodeInto(n, e)
        }
        : function(n, e) {
            const t = d.encode(n);
            return e.set(t),
            {
                read: n.length,
                written: t.length
            }
        }
        ;
        function a(n, e, t) {
            if (void 0 === t) {
                const t = d.encode(n)
                  , r = e(t.length);
                return c().subarray(r, r + t.length).set(t),
                f = t.length,
                r
            }
            let r = n.length
              , o = e(r);
            const u = c();
            let i = 0;
            for (; i < r; i++) {
                const e = n.charCodeAt(i);
                if (e > 127)
                    break;
                u[o + i] = e
            }
            if (i !== r) {
                0 !== i && (n = n.slice(i)),
                o = t(o, r, r = i + 3 * n.length);
                const e = c().subarray(o + i, o + r);
                i += _(n, e).written
            }
            return f = i,
            o
        }
        let l;
        function w() {
            return 0 === l.byteLength && (l = new Int32Array(r.memory.buffer)),
            l
        }
        function b(n, e) {
            try {
                const u = r.__wbindgen_add_to_stack_pointer(-16)
                  , c = a(n, r.__wbindgen_malloc, r.__wbindgen_realloc)
                  , d = f
                  , _ = a(e, r.__wbindgen_malloc, r.__wbindgen_realloc)
                  , l = f;
                r.sign(u, c, d, _, l);
                var t = w()[u / 4 + 0]
                  , o = w()[u / 4 + 1];
                return i(t, o)
            } finally {
                r.__wbindgen_add_to_stack_pointer(16),
                r.__wbindgen_free(t, o)
            }
        }
        function s(n) {
            return () => {
                throw new Error(`${n} is not defined`)
            }
        }
        function g() {
            return Date.now()
        }
        const h = "function" == typeof Math.random ? Math.random : s("Math.random")
          , y = "function" == typeof Math.floor ? Math.floor : s("Math.floor");
        function m(n, e) {
            throw new Error(i(n, e))
        }
        l = new Int32Array(r.memory.buffer),
        o = new Uint8Array(r.memory.buffer)
    },
     238464: function(n, e, t) {
        var r = r123;
        n.exports = r;
        t(988867);
        r[""]()
    }
});



var e;
var t = {
    238464: function () {
        return {
            "./wasm_api_sign_bg.js": {
                __wbg_now_513c8208bd94c09b: function () {
                    return void 0 === e && (e = bc.c[988867].exports),
                        e.ei()
                },
                __wbg_random_9f33d5bdc74069f8: function () {
                    return c123 = bc.c[988867].exports,
                        c123.Aw()
                },
                __wbg_floor_a68aa7c1b572044e: function (e) {
                    return f = bc.c[988867].exports,
                        f.OS(e)
                },
                __wbindgen_throw: function (e, c) {
                    return d = bc.c[988867].exports,
                        d.Or(e, c)
                }
            }
        }
    }
};

function c() {
    var o = new Uint8Array(r123.memory.buffer)
    return 0 === o.byteLength && (o = new Uint8Array(r123.memory.buffer)),
        o
}


function a(n, e, t) {
    if (void 0 === t) {
        const t = d.encode(n)
            , r = e(t.length);
        return c().subarray(r, r + t.length).set(t),
            f = t.length,
            r
    }
    let r = n.length
        , o = e(r);
    const u = c();
    let i = 0;
    for (; i < r; i++) {
        const e = n.charCodeAt(i);
        if (e > 127)
            break;
        u[o + i] = e
    }
    if (i !== r) {
        0 !== i && (n = n.slice(i)),
            o = t(o, r, r = i + 3 * n.length);
        const e = c().subarray(o + i, o + r);
        i += _(n, e).written
    }
    return f = i,
        o
}

function w() {
            return l = new Int32Array(r123.memory.buffer),
            l
        };




function i(n, e) {
    var u = new ("undefined" === typeof TextDecoder ? (0,
        n.require)("util").TextDecoder : TextDecoder)("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
            return u.decode(c().subarray(n, n + e))
        }




r = t[238464]()
WebAssembly.instantiate(wasmcode, r).then(reult => {
    var instance = reult.instance
    r123 = instance.exports
    bc(988867)
    // console.log(r123)
    const u = r123.__wbindgen_add_to_stack_pointer(-16)
        , c = a("/site/api", r123.__wbindgen_malloc, r123.__wbindgen_realloc)
        , d = f
        , _ = a("prod", r123.__wbindgen_malloc, r123.__wbindgen_realloc)
        , l = f;
    //
    r123.sign(u, c, d, _, l);
    var t = w()[u / 4 + 0]
        , o = w()[u / 4 + 1];
    console.log(i(t, o));

})



