var express  = require('express');
var app = express();


app.use(express.static('public'), function(req,res,next){
    next();
})

app.get('/', function(req, res){
  res.sendFile('/index.html');
  //res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
