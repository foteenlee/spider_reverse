

var parse = require('@babel/parser')

var traverse = require('@babel/traverse').default;

jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";`

var ast = parse.parse(jscode)
// console.log(ast)

// ast语法树   访问器对象/插件
traverse(ast, {
    // 定位到VariableDeclarator类别  path 是定位之后的地址
    // 节点    类型
    VariableDeclarator(path){
        // console.log(path.node.init.value)
        console.log(path.toString())
        console.log(path.node)
    }
})
