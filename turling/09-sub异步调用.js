function getAsyncData(num) {
      return new Promise(function (resolve, reject) {
          let number = num;
          if (number >= 10) {
              resolve(number);
          } else {
              resolve("number 小于10");
          }
      });
  }

// 新增一个导出函数（node方式）
module.exports.init = function (arg1, arg2) {
  // 调用函数，并返回
  getAsyncData(arg1 + arg2).then(function (data) {
      console.log('123234', data);
  });
};

// 调用 init 方法并传递参数
module.exports.init(parseInt(process.argv[3]), parseInt(process.argv[4]));