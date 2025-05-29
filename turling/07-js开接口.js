
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log(req.query['aa']);
    res.send(req.query['aa'] + 'cue info in it');
})

app.listen(8080, function () {
    console.log('Server started on http://localhost:8080');
});