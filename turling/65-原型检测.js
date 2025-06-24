

// var navigator = {
//     userAgent: 1234346456
// }
//
// // getOwnPropertyDescriptor 返回对象上一个数下的描述符    检测属性是否是   当前的原型
//
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));


// 补属性  第一种    补隐式原型
// navigator = {}
// navigator.__proto__.userAgent = '12343245456'
//
// console.log(navigator.userAgent)
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));

// 补显示原型
// Navigator = function () {}
// Navigator.prototype.userAgent = '123434645'
// navigator = new Navigator()
// console.log(navigator.userAgent)
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));


// var jsdom = require('jsdom');
// var {JSDOM} = jsdom;
// var dom = new JSDOM('<p>hello</p>', {})
//
// navigator = dom.window.navigator
// console.log(navigator.userAgent)
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));

// 补方法
// document = {}
// document.createElement = function () {}
// console.log(Object.getOwnPropertyDescriptor(document, 'createElement'))

Document = function () {}
// defineProperty 直接在一个对象上定义新的数下, 或者修改现有的属性
Object.defineProperty(Document.prototype, 'createElement', {
      value: function createElement() {},
      writable: true,
      enumerable: true,
      configurable: true
})
// Document.prototype.createElement = function () {
//
// }
HTMLDocument = function () {}
// setPrototypeOf  将一个指定的原型   设置为另一个对象
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype)
document = new HTMLDocument()
// console.log(Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement'))
document.createElement.toString = function (){
      return 'function createElement() { [native code] }'
}
// 重写toString方法
console.log(document.createElement.toString());

















