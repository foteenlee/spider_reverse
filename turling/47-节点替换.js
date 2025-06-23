const generator = require("@babel/generator").default;
const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default
const types = require('@babel/types')
// JS 转 ast语法树
jscode = `
var arr = '3,4,0,5,1,2'['split'](',')
`
var ast = parse.parse(jscode)

traverse(ast, {
    CallExpression(path){
        var {callee, arguments} = path.node
        var data = callee.object.value
        var func = callee.property.value
        var arg = arguments[0].value
        var res = data[func](arg)
        // 替换多节点函数
        path.replaceWith(types.valueToNode(res))
        // console.log(path.node)

    }
})
// 把ast代码还原成js代码
var {code} = generator(ast)
console.log(code)




