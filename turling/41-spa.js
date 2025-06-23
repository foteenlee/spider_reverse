

var fs = require('fs');
var wasmcode = fs.readFileSync('41-wasm.wasm');


function aa(page) {
    WebAssembly.instantiate(wasmcode, {
        "env": {},
        "wasi_snapshot_preview1": {}
    }).then(result => {
        var instance = result.instance;
        var wasm_func = instance.exports;
        res = wasm_func.encrypt(20,  parseInt(Math.round((new Date).getTime() / 1e3).toString()));
        console.log(res)
    })
}

aa(process.argv[2]);



