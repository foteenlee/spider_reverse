

const {VM, VMScript} = require("vm2");

const script = new VMScript("let a = 2;a");

let vm = new VM();

console.log(vm.run(script));





