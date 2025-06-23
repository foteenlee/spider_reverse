!function(_stack) {
      var register;   // 这个就当做是问号的存储位置
      var variable = {};   // 这个就当做是var变量的存储位置。由于没有其他声明方式的存在，所就不写其他的了
      for (let i = 0; i < _stack.length; i++) {
          instruct = _stack[i][0];
          left = _stack[i][1];
          right = _stack[i][2];
          if (instruct === 3) {
              variable[right] = ''
          }
          if (instruct === 1) {
              if (right === '?') {
                  variable[left] = register
              } else {
                  variable[left] = right
              }
          }
          if (instruct === 2) {
              register = variable[left] + variable[right]
          }
      };
      console.log(variable)
  } ([
              [3, 'var', 'a'],
              [1, 'a', '丽丽'],
              [3, 'var', 'b'],
              [1, 'b', '菲菲'],
              [3, 'var', 'c'],
              [1, 'c', '莹莹'],
              [3, 'var', 'd'],
              [2, 'a', 'b'],
              [1, 'd', '?'],
              [3, 'var', 'e'],
              [2, 'd', 'c'],
              [1, 'e', '?'],
          ]
  )