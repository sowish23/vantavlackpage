var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(8080, function(){
  console.log('8080번 포트 연결');
});
