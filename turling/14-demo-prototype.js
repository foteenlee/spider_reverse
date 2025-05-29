
function aa() {
    console.log(123)
}

aa.prototype.bb = function() {
    console.log(234)
}

a = new aa()
a.bb()