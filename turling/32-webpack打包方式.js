

!(function (e) {
    //加载器
    var c = {}
    function n(t) {
        // 缓存   记录已经调用过的模块
        // var a = c[t] = {
        //     i: t,
        //     l: !1,
        //     exports: {}
        // }
        return e[t].call(n)
            // a.l = !0,
            // a.exports
    }
    n(2)
})(
    // 模块  插件   数组
    [
        function () {
            console.log(111)
        },
        function () {
            console.log(222)
        },
        function () {
        console.log(333)
        }
    ]

    // 字典   对象格式
    {
        0: function () {
            console.log(111)
        },
        1: function () {
            console.log(222)
        },
        2: function () {
        console.log(333)
    }
)


