
function aa(t) {
    function bb(tt) {
        console.log(t + tt)
    }
    return bb
}

b = aa(2)

b(123)