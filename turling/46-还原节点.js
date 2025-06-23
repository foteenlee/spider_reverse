// parser 把js代码转换成语法树
var parse = require('@babel/parser')
// traverse 遍历ast    处理ast代码
var traverse = require('@babel/traverse').default
// types 判断节点的类型
var types = require('@babel/types')
var generator = require('@babel/generator').default




jscode = `var b = 1 + 2;
var c = "coo" + "kie";
var a = 1+1,b = 2+2;
var c = 3;
var d = "1" + 1;
var e = 1 + '2';
`
var ast = parse.parse(jscode)

traverse(ast, {
    BinaryExpression(path){
        // console.log(path.node)
        // 解包操作
        var {left, operator, right}  = path.node
        // console.log(left, operator, right)
        if (types.isNumericLiteral(left) && types.isNumericLiteral(right) && operator == '+' || types.isStringLiteral(left) && types.isStringLiteral(right) || types.isStringLiteral(left) && types.isNumericLiteral(right)){
            var res = left.value + right.value
            // console.log(res)
            // 把原来的节点进行替换
            path.replaceWith(types.valueToNode(res))
            // console.log(path.node)
        }
    }
})
// 把ast代码还原成js代码
var {code} = generator(ast)
console.log(code)


