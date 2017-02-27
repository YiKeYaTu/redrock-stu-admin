var express = require('express');
var app = express();
// var http = require('http').createServer();
var fs = require('fs');

// var ws = require('lc-websocket')(http);
var config = require('./server.config.js');

var { staticPath, appRoutePath, appStaticPath, entry } = config;

app.get('/view/*', function (req, res) {
  fs.readFile(entry, function(err, data) {
    res.end(data);
  })
});

app.get(appStaticPath + '*', function(req, res) {
  var filePath = req.path.replace(appStaticPath, '');
  if(fs.existsSync(staticPath + filePath)) {
    fs.readFile(staticPath + filePath, function(err, data) {
      res.end(data);
    });
  } else {
    res.send('Cannot GET ' + req.path);
  }
});

// ws.on('connection', function(socket) {
//   socket.on('data', function(msg) {
//     console.log(msg);
//   });
// })
 
app.listen(8080);