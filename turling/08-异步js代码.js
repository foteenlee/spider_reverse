
var express = require('express');

var app = express();

function get_async(num) {
    return new Promise(function (resolve, reject) {
        var number = num;
        if (number >= 10) {
            resolve(number)
        }else {
            resolve('num小于10');
        }
    })
}

app.get('/use', function (req, res) {
    get_async(10).then(function (data) {
    res.send(data);
});
})


// app.listen(8081, function () {
//     console.log('Server started on http://localhost:8081');
// })

console.log(get_async(12));