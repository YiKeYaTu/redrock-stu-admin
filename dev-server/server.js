var express = require('express');
var app = express();
var fs = require('fs');

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
 
app.listen(8080);