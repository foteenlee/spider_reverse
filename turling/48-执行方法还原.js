
const generator = require("@babel/generator").default;
const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default
const types = require('@babel/types')
// JS 转 ast语法树
jscode = `
!(function () {
    console.log('123')
})
`
var ast = parse.parse(jscode)

traverse(ast, {
    UnaryExpression(path){
        var {argument} = path.node
        if (!types.isFunctionExpression(argument)){
            // 条件不成立说明不是我们要找的方法   退出当前这一次的匹配到的节点
            return
        }
        var {id, params, body} = argument
        // console.log(params)
        if (id != null || params.length != 0){
            return;
        }
        path.replaceWithMultiple(body.body)
    }
})
// 把ast代码还原成js代码
var {code} = generator(ast)
console.log(code)

