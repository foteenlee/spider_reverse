
document = {
    createElement: function () {

    }


}
document.createElement.toString = function () {
    return 'function createElement() { [native code] }'
}
console.log(document.createElement.toString());

