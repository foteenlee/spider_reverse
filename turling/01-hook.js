(function () {
    var _parse = JSON.parse;
    JSON.parse = function (pa) {
        console.log("the hook data" ,pa);
        return _parse(pa);
    }
})();