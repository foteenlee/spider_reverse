
var jsdom = require("jsdom");
var {JSDOM} = jsdom;

var dom = new JSDOM('<p>hello</p>', {url:'https://www.baidu.com'});
// var tit = dom.window.document.querySelector('p').textContent

// console.log(tit)
console.log(dom.window)